$("#searchInput").on("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        $("form").submit();
    }
});