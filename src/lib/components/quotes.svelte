<script lang="ts">
  import type { Quote } from "$lib/types/quote.type";
  export let quotes: Quote[];
  let selectedQuote: Quote = quotes[0];
</script>

<style lang="postcss">
  .quotes {
    max-width: 1000px !important;
  }

  .quote {
    height: 400px;

    @media (max-width: 1040px) {
      height: 300px;
    }

    @media (max-width: 890px) {
      @apply block;
      height: auto;
    }
  }
</style>

<div
  class="quotes bg-off-white shadow-normal rounded-2xl sm:rounded-5xl pt-micro px-0 sm:px-xx-small sm:pt-x-small sm:pb-micro lg:p-small mx-auto"
>
  <div class="flex justify-around flex-wrap max-w-xl mx-auto">
    {#each quotes as quote}
      <button
        class="flex justify-center py-3 group sm:mx-micro"
        on:mouseenter={() => (selectedQuote = quote)}
        on:click={() => (selectedQuote = quote)}
      >
        <img
          src={quote.companyLogo.src}
          alt={quote.companyLogo.alt}
          class="h-7 w-20 sm:h-9 sm:w-28 transition opacity-60 group-hover:opacity-100 group-focus:opacity-100"
        />
      </button>
    {/each}
  </div>
  <div
    class="flex items-center justify-center px-xx-small mt-xx-small lg:mt-small text-left quote"
  >
    <div>
      <img
        src={selectedQuote.img.src}
        alt={selectedQuote.img.alt}
        class="w-56 sm:max-w-xs rounded-3xl lg:max-w-sm xl:max-w-md  mx-auto"
      />
    </div>
    <div
      class="text flex justify-center flex-col flex-1 max-w-lg py-xx-small px-xx-small sm:pl-x-small lg:pl-small lg:pr-0"
    >
      <p class="text-large">
        &ldquo;{selectedQuote.text}&rdquo;
      </p>

      <p class="font-bold mt-xx-small">
        {selectedQuote.author}, {selectedQuote.jobTitle}
      </p>
      {#if selectedQuote.link}
        <div class="text-center mt-xx-small">
          <a href={selectedQuote.link} class="btn">View Customer Story</a>
        </div>
      {/if}
    </div>
  </div>
</div>
