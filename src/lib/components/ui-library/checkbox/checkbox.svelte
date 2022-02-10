<script lang="ts">
  let className: string = "";
  export let checked: boolean;
  export let label: string = "";
  export let element: HTMLElement = null;
  export let hasError: boolean = false;
  export { className as class };
</script>

<style lang="postcss">
  .error {
    @apply text-error border-error;
  }

  label::before {
    content: "";
    flex: 0 0 24px;
    @apply text-transparent block h-6 rounded
      text-center mr-micro transition border border-solid border-divider
      leading-[1.1];
  }

  input:checked + label::before {
    background-image: url("/tick-dark.svg");
    @apply text-black border border-solid border-orange-900 bg-orange-900 bg-center;
  }

  label:hover::before,
  label:focus::before {
    @apply border-dark-grey;
  }
</style>

<input
  class="hidden absolute box-border text-[#000000] {className}"
  class:error={hasError}
  id={label}
  bind:checked
  bind:this={element}
  on:change
  type="checkbox"
  {...$$restProps}
/>
{#if label}
  <label
    class="flex before:text-transparent before:content-[''] "
    class:error={hasError}
    for={label}>{@html label}</label
  >
{/if}
