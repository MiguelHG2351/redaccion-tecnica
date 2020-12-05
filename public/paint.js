export default class Bezel {

    static get inputProperties() {
        return [ '--background-1', '--background-2', '--bezel-radius', '--bezel-border-color' ]
    }

    static get inputArguments() { return ['*']; }

    parseValue(val) {
        return val.toString().replace(/px|%/g, '').split(' ');
    }

    static get contextOptions() {

    }

    paint(ctx, geom, properties) {

        const rad1 = properties.get('--background-1');
        const rad2 = properties.get('--background-2');
        const width = geom.width;
        const height = geom.height;

        const gradient = ctx.createLinearGradient(0, 0, width, 0)
        gradient.addColorStop(0, rad1);
        gradient.addColorStop(1, rad2);
        
        const [
            topLeftRadius,
            topRightRadius,
            bottomRightRadius,
            bottomLeftRadius,
        ] = this.parseValue(properties.get('--bezel-radius'));

        ctx.lineWidth = 2;

        const inset = ctx.lineWidth / 2

        ctx.strokeStyle = properties.get('--bezel-border-color');

        ctx.lineTo(topLeftRadius, inset);
        ctx.lineTo(width - topRightRadius, inset);
        ctx.lineTo(width - inset, topRightRadius);
        ctx.lineTo(width - inset, height - bottomRightRadius);
        ctx.lineTo(width - bottomRightRadius, height - inset);
        ctx.lineTo(bottomLeftRadius, height - inset);
        ctx.lineTo(inset, height - bottomLeftRadius);
        ctx.lineTo(inset, topLeftRadius);

            ctx.fillStyle = gradient
        

        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    }
}

registerPaint('bezel', Bezel)