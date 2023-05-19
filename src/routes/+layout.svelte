<script>
    import "../app.css";
    import NavBar from "./NavBar.svelte"
</script>

<div>
    <NavBar />

    <div class=" OutletCSS content-center">
        <slot />
    </div>
</div>



<style>
    .OutletCSS {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        align-content: center;
        max-width: 1920px;
    }
</style>