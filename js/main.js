'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'audio-play': {
          'onclick': play_audio,
        },
        'audio-stop': {
          'onclick': audio_stop_all,
        },
      },
      'info': '<input id=audio-play type=button value=Play><input id=audio-stop type=button value=Stop><br>'
        + '<span id=properties-tabs></span><div id=properties-tabcontent></div>',
      'menu': true,
      'menu-block-events': false,
      'storage': {
        'duration': .1,
        'frequency': 100,
        'type': 'sine',
        'volume': 1,
      },
      'storage-menu': '<table><tr><td><input id=duration><td>Duration'
        + '<tr><td><input id=frequency><td>Frequency'
        + '<tr><td><select id=type><option value=sawtooth>sawtooth</option><option value=sine>sine</option><option value=square>square</option><option value=triangle>triangle</option></select><td>Type'
        + '<tr><td><input id=volume><td>Volume</table>',
      'tabs': {
        'properties': {
          'content': '<table><tr class=header><td>audio_context<td>Properties'
            + '<tr><td id=baseLatency><td>baseLatency'
            + '<tr><td id=destination-channelCount><td>destination.channelCount'
            + '<tr><td id=destination-channelCountMode><td>destination.channelCountMode'
            + '<tr><td id=destination-channelInterpretation><td>destination.channelInterpretation'
            + '<tr><td id=destination-maxChannelCount><td>destination.maxChannelCount'
            + '<tr><td id=destination-numberOfInputs><td>destination.numberOfInputs'
            + '<tr><td id=destination-numberOfOutputs><td>destination.numberOfOutputs'
            + '<tr><td id=listener-forwardX-value><td>listener.forwardX.value'
            + '<tr><td id=listener-forwardY-value><td>listener.forwardY.value'
            + '<tr><td id=listener-forwardZ-value><td>listener.forwardZ.value'
            + '<tr><td id=listener-positionX-value><td>listener.positionX.value'
            + '<tr><td id=listener-positionY-value><td>listener.positionY.value'
            + '<tr><td id=listener-positionZ-value><td>listener.positionZ.value'
            + '<tr><td id=listener-upX-value><td>listener.upX.value'
            + '<tr><td id=listener-upY-value><td>listener.upY.value'
            + '<tr><td id=listener-upZ-value><td>listener.upZ.value'
            + '<tr><td id=sampleRate><td>sampleRate</table>',
          'group': 'properties',
          'label': 'Audio Properties',
        },
      },
      'title': 'AudioEditor.htm',
    });
}
