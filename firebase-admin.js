import * as admin from "firebase-admin";

admin.initializeApp();

exports.addAdmin = functions.https.onCall((data, context) => {
  if (context.auth.token.admin !== true) {
    return {
      error: "Request not authorized. User must be an admin to fulfill request",
    };
  }
  const email = data.email;
  return grantEmployerRole(email).then(() => {
    return {
      result: `Request fulfilled ${email} is now a moderator.`,
    };
  });
});

async function grantEmployerRole(email) {
  const user = await admin.auth().getUserByEmail(email);
  if (user.customClaims.employer === true) {
    return;
  }
  return admin.auth().setCustomUserClaims(user.uid, {
    employer: true,
    manager: true,
  });
}
