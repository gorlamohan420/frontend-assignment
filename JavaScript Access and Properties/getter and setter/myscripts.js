var counter = {
    _count: 0,
    get count() {
        return this._count;
    },
    set count(value) {
        if (value >= 0) {
            this._count = value;
            document.getElementById("counter").textContent = value;
        } else {
            console.error("Counter value cannot be negative.");
        }
    }
};
function incrementCounter() {
    counter.count++; 
}