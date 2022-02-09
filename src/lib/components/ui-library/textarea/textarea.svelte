<script lang="ts">
  export let value: string;
  let className = "";
  export let element: HTMLElement = null;
  export let hasError: boolean = false;
  //TODO ADD Eventforwarder
  export { className as class };
</script>

<style lang="postcss">
  .error {
    @apply text-error border-error;
  }
</style>

<textarea
  on:change
  bind:value
  bind:this={element}
  class:error={hasError}
  class="whitespace-pre-wrap bg-transparent text-dark-grey box-border w-full rounded-lg py-2 px-4 border-[1px] border-divider {className}"
  {...$$restProps}
/>
