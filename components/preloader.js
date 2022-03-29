const Preloader = () => {
  return (
    <div class="flex items-center justify-center">
      <div
        class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <span class="visually-hidden">
          <img src="brand/choys.svg" alt="choys logo" />
        </span>
      </div>
    </div>
  );
};
