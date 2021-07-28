<script>
    export let link;
    export let tech;
    export let title;
    export let description;

    let badges = {
        "HTML": "danger",
        "CSS": "primary",
        "Javascript": "success"
    }

</script>


<main class="card bg-secondary text-dark">
    <div class="card-body">
        <h4>{title}</h4>
        <div class="card-subtitle">
            {#each tech as badge}
                <span data-bs-toggle="tooltip" title="This project uses {badge}" 
                    class="badge bg-{badges[badge]}">
                    {badge}
                </span>
            {/each}
        </div>
        <p class="card-content">{description}</p>
    </div>
    <div class="card-footer">
        <a href="{link}" target="_blank" class="card-link">Visit-></a>
    </div>
</main>

<style>
    span{
        margin-right: 5px;
    }
    p{
        margin: 1rem auto;
    }
</style>