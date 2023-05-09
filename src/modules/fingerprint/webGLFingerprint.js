export default () => {
  const width = 256;
  const height = 128;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('webgl2')
    || canvas.getContext('experimental-webgl2')
    || canvas.getContext('webgl')
    || canvas.getContext('experimental-webgl')
    || canvas.getContext('moz-webgl');

  const vertexShaderSource = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}';
  const fragmentShaderSource = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}';
  const createdBuffer = context.createBuffer();

  context.bindBuffer(context.ARRAY_BUFFER, createdBuffer);

  const i = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.7321, 0]);

  context.bufferData(context.ARRAY_BUFFER, i, context.STATIC_DRAW);
  createdBuffer.itemSize = 3;
  createdBuffer.numItems = 3;

  const createdProgram = context.createProgram();
  const createdVertexShader = context.createShader(context.VERTEX_SHADER);

  context.shaderSource(createdVertexShader, vertexShaderSource);
  context.compileShader(createdVertexShader);

  const createdFragmentShader = context.createShader(context.FRAGMENT_SHADER);

  context.shaderSource(createdFragmentShader, fragmentShaderSource);
  context.compileShader(createdFragmentShader);
  context.attachShader(createdProgram, createdVertexShader);
  context.attachShader(createdProgram, createdFragmentShader);
  context.linkProgram(createdProgram);
  context.useProgram(createdProgram);

  createdProgram.vertexPosAttrib = context.getAttribLocation(createdProgram, 'attrVertex');
  createdProgram.offsetUniform = context.getUniformLocation(createdProgram, 'uniformOffset');

  context.enableVertexAttribArray(createdProgram.vertexPosArray);
  context.vertexAttribPointer(
    createdProgram.vertexPosAttrib,
    createdBuffer.itemSize,
    context.FLOAT,
    !1,
    0,
    0,
  );
  context.uniform2f(createdProgram.offsetUniform, 1, 1);
  context.drawArrays(context.TRIANGLE_STRIP, 0, createdBuffer.numItems);

  context.readPixels(
    0,
    0,
    width,
    height,
    context.RGBA,
    context.UNSIGNED_BYTE,
    new Uint8Array(width * height * 4),
  );
  return canvas.toDataURL();
};
