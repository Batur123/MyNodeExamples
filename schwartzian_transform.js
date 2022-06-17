const sortBy = ((() => {
    const toString = Object.prototype.toString,

        parse = function (x) {
            return x;
        },

        getItem = function (x) {
            const isObject = x != null && typeof x === "object";
            const isProp = isObject && this.prop in x;
            return this.parser(isProp ? x[this.prop] : x);
        };

    return (array, cfg) => {
        if (!(array instanceof Array && array.length)) return [];
        if (toString.call(cfg) !== "[object Object]") cfg = {};
        if (typeof cfg.parser !== "function") cfg.parser = parse;
        cfg.desc = !!cfg.desc ? -1 : 1;
        return array.sort(function (a, b) {
            a = getItem.call(cfg, a);
            b = getItem.call(cfg, b);
            return cfg.desc * (a < b ? -1 : +(a > b));
        });
    };

})());

let obj = [
    {date:"5"},
    {date:"333"},
    {date:"34555"},
]
sortBy(obj, { prop: "date" });
