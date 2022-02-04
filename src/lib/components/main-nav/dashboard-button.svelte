<script>
  import LinkButton from "$lib/components/ui-library/link-button";
  let clazz = "";
  export { clazz as class };
</script>

<LinkButton
  variant="tertiary"
  size="medium"
  href="https://gitpod.io/"
  class="flex items-center justify-center"
  data-analytics={`{"context":"dashboard"}`}
>
  Dashboard
</LinkButton>
