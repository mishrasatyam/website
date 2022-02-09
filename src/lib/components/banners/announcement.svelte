<script>
  import Banner from "./base.svelte";

  /**
   * Each announcement must have a unique `storageKey` to ensure people who
   * dismiss announcement A will see a new banner for announcement B.
   * For simplicity, the announcement `storageKey` is the date the announcement
   * was made, in the `yyyy-mm-dd` format.
   */
  const startDate = new Date("2022-02-09");
  const endDate = new Date("7:00 AM, 24 February, 2022");
</script>

<div
  class="border-b border-gray-300 border-solid"
  data-analytics={`{"position":"announcement"}`}
>
  <Banner
    storageKey="announcement-{`${startDate}${endDate}`}"
    let:closeBanner
    class="announcement-banner"
    {startDate}
    {endDate}
  >
    <span class="flex-1 text-lg text-right">🤝 </span>
    <p class="flex-2 px-4 md:px-2">
      Gitpod x JetBrains join forces to solve 'works on my machine' problem | <a
        href="/vs/jetbrains-space"
        on:click={closeBanner}>View announcement</a
      >
    </p>
    <div class="flex-1 flex justify-end">
      <button on:click={closeBanner} class="align-middle">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.00107 1L11 11M10.9989 1L1 11"
            stroke="#12100C"
            stroke-opacity="0.75"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  </Banner>
</div>
