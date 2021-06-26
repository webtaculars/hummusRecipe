exports.drawPath = function drawPath(coordinates, options = {}) {
    const context = this.pageContext;
    context.q().drawPath(...coordinates, options).Q();
    return this;
};
