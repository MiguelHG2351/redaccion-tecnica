export default class Bezel {

    static get inputProperties() {
        return [ '--background', '--bezel-radius', '--bezel-border-color' ]
    }
 
    parseValue(val) {
        return val.toString().replace(' ', '').replace(/px|%/g, '').split(' ');
    }

    paint(ctx, geom, properties, args) {
        const bgColor = properties.get('--background');
        const width = geom.width;
        const height = geom.height;

        ctx.strokeStyle = bgColor

        const [
            topLeftRadius,
            topRightRadius,
            bottomRightRadius,
            bottomLeftRadius,
        ] = this.parseValue(properties.get('--bezel-radius'));
        ctx.lineWidth = 2;
        const inset = ctx.lineWidth / 2
        ctx.strokeStyle = properties.get('--bezel-border-color');
        debugger
        ctx.lineTo(topLeftRadius, inset);
        ctx.lineTo(width - topRightRadius, inset);
        ctx.lineTo(width - inset, topRightRadius);
        ctx.lineTo(width - inset, height - bottomRightRadius);
        ctx.lineTo(width - bottomRightRadius, height - inset);
        ctx.lineTo(bottomLeftRadius, height - inset);
        ctx.lineTo(inset, height - bottomLeftRadius);
        ctx.lineTo(inset, topLeftRadius);
        ctx.closePath();
        ctx.stroke();
    }
}

registerPaint('bezel', Bezel)