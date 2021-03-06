class Art {
  static get inputProperties() {
    return [
      '--art-color',
      '--art-steps',
      '--art-alpha'
    ];
  }


  draw(ctx, x, y, width, height) {
    const leftToRight = Math.random() >= 0.5;

    if( leftToRight ) {
      ctx.moveTo(x, y);
      ctx.lineTo(x + width, y + height);
    } else {
      ctx.moveTo(x + width, y);
      ctx.lineTo(x, y + height);
    }

    ctx.stroke();
  }

  paint(ctx, size, props) {
    
    const color = props.get('--art-color');
    const step = Number(props.get('--art-steps')[0])
    const alpha = props.get('--art-alpha');

    ctx.globalAlpha = alpha;
    ctx.strokeStyle = color;

    for( let x = 0; x < size.width; x += step) {
      for( let y = 0; y < size.width; y+= step) {
        this.draw(ctx, x, y, step, step);
      }
    }
  }
}

registerPaint('art', Art);