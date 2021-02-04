var code_def = [
"import librosa.display\n",
"import matplotlib.pyplot as plt\n",
"import IPython.display as ipd\n",
"def display_wav(signal,fn):\n",
"  librosa.display.waveplot(signal, sr=sr)\n",
"  plt.xlabel('Time')\n",
"  plt.ylabel('Amplitude')\n",
"  plt.savefig(fn, Bbox='tight')",
"  plt.show()"]


// Select code area
var code_areas = d3.select(".code-box");
code_areas.append("code").text(code_def);
