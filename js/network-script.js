// Create an array with nodes
var nodes = new vis.DataSet([
    {id: 'Windows', shape: 'image', image: 'assets/logos/windows.png'},
    {id: 'Linux', shape: 'image', image: 'assets/logos/linux.svg'},
    {id: 'MacOS', shape: 'image', image: 'assets/logos/macos.svg'},
    {id: 'Unreal Engine 4', shape: 'image', image: 'assets/logos/ue4.png'},
    {id: 'Unity', shape: 'image', image: 'assets/logos/unity.png'},
    {id: 'Visual Studio', shape: 'image', image: 'assets/logos/visualstudio.svg'},
    {id: 'Android Studio', shape: 'image', image: 'assets/logos/androidstudio.svg'},
    {id: 'Notepad++', shape: 'image', image: 'assets/logos/notepadplusplus.png'},
    {id: 'Eclipse', shape: 'image', image: 'assets/logos/eclipse.svg'},
    {id: 'Sublime Text', shape: 'image', image: 'assets/logos/sublimetext.png'},
    {id: 'Atom', shape: 'image', image: 'assets/logos/atom.svg'},
    {id: 'RubyMine', shape: 'image', image: 'assets/logos/rubymine.svg'},
    {id: 'Slack', shape: 'image', image: 'assets/logos/slack.png'},
    {id: 'Trello', shape: 'image', image: 'assets/logos/trello.svg', size: 10},
    {id: 'Maya', shape: 'image', image: 'assets/logos/maya.png'},
    {id: '3dsMax', shape: 'image', image: 'assets/logos/3dsmax.jpg'},
    {id: 'Oculus Rift', shape: 'image', image: 'assets/logos/oculus.png'},
    {id: 'C#', shape: 'image', image: 'assets/logos/csharp.png'},
    {id: 'C', shape: 'image', image: 'assets/logos/c.png'},
    {id: 'C++', shape: 'image', image: 'assets/logos/cplusplus.svg'},
    {id: 'Android', shape: 'image', image: 'assets/logos/android.svg'},
    {id: 'LibGDX', shape: 'image', image: 'assets/logos/libgdx.png', size: 10},
    {id: 'Java', shape: 'image', image: 'assets/logos/java.png'},
    {id: 'Arduino', shape: 'image', image: 'assets/logos/arduino.png'},
    {id: 'PHP', shape: 'image', image: 'assets/logos/php.svg'},
    {id: 'Javascript', shape: 'image', image: 'assets/logos/javascript.svg'},
    {id: 'HTML5', shape: 'image', image: 'assets/logos/html5.svg'},
    {id: 'CSS3', shape: 'image', image: 'assets/logos/css3.svg'},
    {id: 'SASS', shape: 'image', image: 'assets/logos/sass.svg'},
    {id: 'Python', shape: 'image', image: 'assets/logos/python.svg'},
    {id: 'Haskell', shape: 'image', image: 'assets/logos/haskell.png'},
    {id: 'Ruby', shape: 'image', image: 'assets/logos/ruby.svg'},
    {id: 'OpenGL', shape: 'image', image: 'assets/logos/opengl.png'},
    {id: 'OpenCV', shape: 'image', image: 'assets/logos/opencv.png'},
    {id: 'Wordpress', shape: 'image', image: 'assets/logos/wordpress.png'},
    {id: 'Chrome', shape: 'image', image: 'assets/logos/chrome.svg'},
    {id: 'Firefox', shape: 'image', image: 'assets/logos/firefox.svg'},
    {id: 'React-Native', label: 'React Native', font: {color: '#61dbfa', vadjust: -10}, shape: 'image', image: 'assets/logos/reactnative.png', level: 9},
    {id: 'Rails', shape: 'image', image: 'assets/logos/rails.svg'},
    {id: 'GIMP', shape: 'image', image: 'assets/logos/gimp.svg'},
    {id: 'AWS', shape: 'image', image: 'assets/logos/aws.svg'},
]);

// Create an array with edges
var edges = new vis.DataSet([
    {from: 'Windows', to: 'Linux'},
    {from: 'Windows', to: 'MacOS'},
    {from: 'Linux', to: 'MacOS'},
    {from: 'Unreal Engine 4', to: 'Maya'},
    {from: 'Unreal Engine 4', to: '3dsMax'},
    {from: 'Unreal Engine 4', to: 'Oculus Rift'},
    {from: 'Unity', to: 'Visual Studio'},
    {from: 'Unity', to: 'C#'},
    {from: 'Visual Studio', to: 'C#'},
    {from: 'Visual Studio', to: 'C'},
    {from: 'Visual Studio', to: 'C++'},
    {from: 'Android Studio', to: 'Android'},
    {from: 'Android Studio', to: 'LibGDX'},
    {from: 'Android Studio', to: 'Java'},
    {from: 'Notepad++', to: 'Arduino'},
    {from: 'Notepad++', to: 'PHP'},
    {from: 'Notepad++', to: 'HTML5'},
    {from: 'Notepad++', to: 'CSS3'},
    {from: 'Notepad++', to: 'SASS'},
    {from: 'Eclipse', to: 'Java'},
    {from: 'Sublime Text', to: 'Java'},
    {from: 'Sublime Text', to: 'Javascript'},
    {from: 'Sublime Text', to: 'Python'},
    {from: 'Sublime Text', to: 'Haskell'},
    {from: 'Atom', to: 'Javascript'},
    {from: 'Atom', to: 'HTML5'},
    {from: 'Atom', to: 'CSS3'},
    {from: 'Atom', to: 'SASS'},
    {from: 'Atom', to: 'Ruby'},
    {from: 'RubyMine', to: 'Ruby'},
    {from: 'Slack', to: 'Trello'},
    {from: 'Maya', to: '3dsMax'},
    {from: 'Maya', to: 'OpenGL'},
    {from: '3dsMax', to: 'OpenGL'},
    {from: 'C++', to: 'OpenGL'},
    {from: 'C++', to: 'OpenCV'},
    {from: 'PHP', to: 'Wordpress'},
    {from: 'Javascript', to: 'HTML5'},
    {from: 'Javascript', to: 'Chrome'},
    {from: 'Javascript', to: 'Firefox'},
    {from: 'Javascript', to: 'React-Native'},
    {from: 'HTML5', to: 'CSS3'},
    {from: 'CSS3', to: 'SASS'},
    {from: 'Ruby', to: 'Rails'},
    {from: 'OpenGL', to: 'OpenCV'},
    {from: 'OpenGL', to: 'GIMP'},
    {from: 'React-Native', to: 'AWS'},
    {from: 'React-Native', to: 'Rails'},
]);

// Create a network
var container = document.getElementById('technologies-graph');

// Provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
  autoResize: true,
  height: '100%',
  width: '100%',
  edges: {
    color: {
      color: '#000000',
    },
    dashes: true,
  },
  layout: {
    randomSeed: 4,
    improvedLayout:false,
  },
  physics:{
    repulsion: {
      centralGravity: 0.2,
      springLength: 200,
      springConstant: 0.05,
      nodeDistance: 120,
      damping: 0.09
    },
    solver: 'repulsion',
  }

};

// Initialize your network!
var network = new vis.Network(container, data, options);
network.once('stabilized', function() {
    network.focus('Atom', {
      scale: 1,
      animation: {
        duration: 1000,
        easingFunction: 'easeInCubic'
      }
    });
})
