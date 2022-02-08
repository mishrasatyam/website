<script lang="ts">
  export let value: string;
  let className = "";
  export let element: HTMLElement = null;
  //TODO ADD Eventforwarder
  export { className as class };
</script>

<textarea
  on:change
  bind:value
  bind:this={element}
  class=" whitespace-pre-wrap text-dark-grey box-border w-full rounded-lg py-2 px-4 border-[1px] border-divider {className}"
  {...$$restProps}
/>
