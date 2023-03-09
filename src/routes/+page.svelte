<script lang="ts">
  import Image from "$lib/components/Image.svelte";
</script>

<section>
  <h1>
    Very Opinionated Example of Using SvelteKit with Vercel Image Optimization
  </h1>
  <a href="https://github.com/hartwm/vercel-images-sveltekit">Github Repo</a>
    

  <h3>Local Images</h3>
  <Image image={{ sourceUrl: "/example.jpg" }} width={1920} height={1277} />

  <h3>Remote Images</h3>
  <p>Set remote options in scripts/vercel-images.js</p>
  <Image
    image={{
      sourceUrl:
        "https://d2od76x949sv9u.cloudfront.net/koios/wp-content/uploads/2023/01/30164450/paul-kansonkho-9xjHQvdMi4c-unsplash-scaled.jpg",
    }}
    width={1920}
    height={1277}
  />

  <h3>Using with Image Sizes</h3>
  <p>
    Based on Tailwind Breakpoints <small
      >(Tailwind not installed or required)</small
    >
  </p>
  <p>
    In this example it would tell the browser that the image would be full
    browser width until `lg` breakpoint at which time it would be 50vw and at
    `xl` breakpoint it would be 33vw
  </p>
  <div class="row">
    {#each [...Array(3)] as item}
      <div class="column">
        <Image
          image={{ sourceUrl: "/example.jpg" }}
          width={1920}
          height={1277}
          sizes={{ lg: "50vw", xl: "33vw" }}
        />
      </div>
    {/each}
  </div>
</section>

<style>
  section {
    max-width: 100%;
    width: 1400px;
    margin: auto;
    padding: 3vw;
    box-sizing: border-box;
  }
  :global(img) {
    max-width: 100%;
    height: auto;
  }
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .column {
    width: 100%;
  }
  @media (min-width: 1024px) {
    .column {
      width: 50%;
    }
  }
  @media (min-width: 1280px) {
    .column {
      width: 33%;
    }
  }
</style>
