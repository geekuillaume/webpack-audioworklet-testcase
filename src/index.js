class TestWorklet extends AudioWorkletNode {
  constructor(context) {
    super(context, 'TestProcessor', {
      numberOfOutputs: 1,
      numberOfInputs: 0,
      outputChannelCount: [1],
    });
  }
}

const main = () => {
  console.log('toto');
  const context = new AudioContext();
  console.log(context);
  context.audioWorklet.addModule(new URL('./audioworklet.js', import.meta.url));
  const workletNode = new TestWorklet(context);
  console.log(workletNode);
}

main();
