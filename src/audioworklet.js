class TestProcessor extends AudioWorkletProcessor {
  process(inputs, outputs) {
    return true;
  }
}

registerProcessor('TestProcessor', TestProcessor);
