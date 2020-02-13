"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCards = makeCards;
exports.preload = preload;

var _projects = _interopRequireDefault(require("./projects.js"));

var _makeCard = _interopRequireDefault(require("./makeCard.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function makeCards(filter, container) {
  container.innerHTML = '';

  if (filter === 'AllVisible') {
    _projects["default"].forEach(function (project) {
      return container.append((0, _makeCard["default"])(project));
    });
  } else {
    var uniqueProjects = new Set();

    if (filter instanceof Array) {
      filter.forEach(function (projectFilter) {
        _projects["default"].forEach(function (project) {
          if (project.languages.includes(projectFilter)) {
            uniqueProjects.add(project);
          }
        });
      });
    }

    uniqueProjects.forEach(function (project) {
      return container.append((0, _makeCard["default"])(project));
    });
  }
}

function preload(container) {
  var loaded = false;
  return function () {
    if (!loaded) {
      makeCards('AllVisible', container);
      loaded = true;
    }
  };
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var iconLibrary = {
  JavaScript: {
    code: "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>JavaScript icon</title><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\"/></svg>",
    color: 'F7DF1E',
    backgroundColor: '',
    name: ''
  },
  HTML: {
    code: "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>HTML5 icon</title><path d=\"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z\"/></svg>",
    color: 'E34F26',
    backgroundColor: '',
    name: ''
  },
  CSS: {
    code: "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>CSS3 icon</title><path d=\"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z\"/></svg>",
    color: '1572B6',
    backgroundColor: '',
    name: ''
  },
  Jest: {
    code: "<svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" viewBox=\"0 0 24 24\"><title>Jest icon</title><path d=\"M22.251 11.82a3.117 3.117 0 0 0-2.328-3.01L22.911 0H8.104L11.1 8.838a3.116 3.116 0 0 0-2.244 2.988c0 1.043.52 1.967 1.313 2.536a8.279 8.279 0 0 1-1.084 1.244 8.14 8.14 0 0 1-2.55 1.647c-.834-.563-1.195-1.556-.869-2.446a3.11 3.11 0 0 0-.91-6.08 3.117 3.117 0 0 0-3.113 3.113c0 .848.347 1.626.903 2.182-.048.097-.097.195-.146.299-.465.959-.993 2.043-1.195 3.259-.403 2.432.257 4.384 1.849 5.489A5.093 5.093 0 0 0 5.999 24c1.827 0 3.682-.917 5.475-1.807 1.279-.632 2.599-1.292 3.898-1.612.48-.118.98-.187 1.508-.264 1.07-.153 2.175-.312 3.168-.89a4.482 4.482 0 0 0 2.182-3.091c.174-.994 0-1.994-.444-2.87.298-.48.465-1.042.465-1.647zm-1.355 0c0 .965-.785 1.75-1.75 1.75a1.753 1.753 0 0 1-1.085-3.126l.007-.007c.056-.042.118-.084.18-.125 0 0 .008 0 .008-.007.028-.014.055-.035.083-.05.007 0 .014-.006.021-.006.028-.014.063-.028.097-.042.035-.014.07-.027.098-.041.007 0 .013-.007.02-.007.028-.007.056-.021.084-.028.007 0 .02-.007.028-.007.034-.007.062-.014.097-.02h.007l.104-.022c.007 0 .02 0 .028-.007.028 0 .055-.007.083-.007h.035c.035 0 .07-.007.111-.007h.09c.028 0 .05 0 .077.007h.014c.055.007.111.014.167.028a1.766 1.766 0 0 1 1.396 1.723zM10.043 1.39h10.93l-2.509 7.4c-.104.02-.208.055-.312.09l-2.64-5.385-2.648 5.35c-.104-.034-.216-.055-.327-.076l-2.494-7.38zm4.968 9.825a3.083 3.083 0 0 0-.938-1.668l1.438-2.904 1.452 2.967c-.43.43-.743.98-.868 1.605H15.01zm-3.481-1.098c.034-.007.062-.014.097-.02h.02c.029-.008.056-.008.084-.015h.028c.028 0 .049-.007.076-.007h.271c.028 0 .049.007.07.007.014 0 .02 0 .035.007.027.007.048.007.076.014.007 0 .014 0 .028.007l.097.02h.007c.028.008.056.015.083.029.007 0 .014.007.028.007.021.007.049.014.07.027.007 0 .014.007.02.007.028.014.056.021.084.035h.007a.374.374 0 0 1 .09.049h.007c.028.014.056.034.084.048.007 0 .007.007.013.007.028.014.05.035.077.049l.007.007c.083.062.16.132.236.201l.007.007a1.747 1.747 0 0 1 .48 1.209 1.752 1.752 0 0 1-3.502 0 1.742 1.742 0 0 1 1.32-1.695zm-6.838-.049c.966 0 1.751.786 1.751 1.751s-.785 1.751-1.75 1.751-1.752-.785-1.752-1.75.786-1.752 1.751-1.752zm16.163 6.025a3.07 3.07 0 0 1-1.508 2.133c-.758.438-1.689.577-2.669.716a17.29 17.29 0 0 0-1.64.291c-1.445.355-2.834 1.05-4.182 1.717-1.724.854-3.35 1.66-4.857 1.66a3.645 3.645 0 0 1-2.154-.688c-1.529-1.056-1.453-3.036-1.272-4.12.167-1.015.632-1.966 1.077-2.877.028-.055.049-.104.077-.16.152.056.312.098.479.126-.264 1.473.486 2.994 1.946 3.745l.264.139.284-.104c1.216-.431 2.342-1.133 3.336-2.071a9.334 9.334 0 0 0 1.445-1.716c.16.027.32.034.48.034a3.117 3.117 0 0 0 3.008-2.327h1.167a3.109 3.109 0 0 0 3.01 2.327c.576 0 1.11-.16 1.57-.43.18.52.236 1.063.139 1.605z\"/></svg>",
    color: 'C21325',
    backgroundColor: '',
    name: ''
  },
  Bootstrap: {
    code: "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Bootstrap icon</title><path d=\"M20 0H4C1.793.006.006 1.793 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-2.187 16.855c-.2.482-.517.907-.923 1.234-.42.34-.952.62-1.607.82-.654.203-1.432.305-2.333.305H6.518v-14h6.802c1.258 0 2.266.283 3.02.86.76.58 1.138 1.444 1.138 2.61 0 .705-.172 1.31-.518 1.81-.344.497-.84.886-1.48 1.156v.046c.854.18 1.515.585 1.95 1.215s.658 1.426.658 2.387c0 .538-.104 1.05-.3 1.528l.025.027zm-2.776-3.45c-.41-.375-.986-.558-1.73-.558H8.985v4.368h4.334c.74 0 1.32-.192 1.73-.58.41-.385.62-.934.62-1.64-.007-.69-.21-1.224-.62-1.59h-.017zm-.6-2.823c.396-.336.59-.817.59-1.444 0-.704-.175-1.204-.53-1.49-.352-.285-.86-.433-1.528-.433h-4v3.863h4c.583 0 1.08-.17 1.464-.496z\"/></svg>",
    color: '563D7C',
    backgroundColor: '',
    name: ''
  },
  MongoDB: {
    code: "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>MongoDB icon</title><path d=\"M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0c-.002.019-.004.031-.005.049v.013h-.001c-.002.015-.003.025-.004.039v.015h-.002c0 .01-.002.018-.002.026v.026h-.003c-.001.008-.001.018-.003.025v.021h-.002c0 .007 0 .015-.002.021v.02h-.002c0 .01-.001.022-.002.032v.002c-.003.017-.006.034-.009.05v.008h-.002c-.001.004-.003.008-.003.012v.017h-.003v.022h-.005v.018h-.005v.021h-.004v.019h-.004v.017h-.006v.014h-.004v.018h-.004v.014h-.005v.013H11.8v.015h-.004c-.001.001-.001.003-.001.004v.01h-.003c-.001.002-.001.004-.001.006v.006h-.002c-.001.003-.002.008-.002.01-.003.007-.007.014-.01.021v.002c-.002.002-.004.005-.005.007v.008h-.004v.008h-.005v.008h-.003v.01h-.006v.014h-.004v.004h-.004v.008h-.004v.011h-.004v.008h-.006v.011h-.004v.008h-.005v.008h-.003v.01h-.005v.008h-.004v.006h-.004v.008h-.006V.76h-.004v.006h-.005v.008h-.004v.011h-.005v.004h-.003v.008h-.006v.004h-.004v.01h-.004v.004h-.004v.008h-.005v.006h-.003l-.002.004v.004h-.002c-.001.002-.002.002-.002.004v.001h-.001c-.001.003-.002.005-.004.007v.003h-.001c-.005.006-.008.012-.012.018v.001c-.002.002-.007.006-.009.01v.002h-.001c-.001.001-.003.002-.003.003v.003h-.002l-.003.003v.001h-.001c0 .001-.002.002-.003.004v.004h-.003l-.002.002v.002h-.002c0 .002-.002.002-.002.003v.003h-.004c0 .001-.001.002-.002.003V.92h-.003v.004h-.004V.93h-.004v.008h-.005V.93h-.005v.004h-.004V.94h-.005v.008h-.005v.004h-.004v.006h-.004v.004h-.004V.97h-.006v.004h-.004V.98h-.005v.004h-.004v.005h-.005v.01h-.002v.004h-.006v.005h-.004v.002h-.004v.004h-.005v.01h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.005v.004h-.004v.004h-.004v.01h-.004v.005h-.006v.004h-.004v.004h-.005v.006h-.004v.004h-.005v.007h-.004v.004h-.006V1.1h-.002v.004h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.003c-.001.001-.001.002-.001.002v.002h-.002l-.004.004s-.002.002-.004.003v.006h-.004v.005h-.004v.004h-.004v.004h-.003l-.003.003v.003h-.002l-.002.002v.003h-.002c-.005.006-.007.01-.014.016-.002.002-.008.007-.012.01-.012.008-.027.021-.039.032-.008.005-.016.012-.022.017v.001h-.001c-.016.013-.031.025-.049.039v.001c-.024.02-.047.039-.074.062V1.34h-.002c-.057.047-.117.1-.186.159V1.5h-.001c-.169.148-.37.338-.595.568l-.015.015-.004.004C9 3.494 6.857 6.426 6.631 11.164c-.02.392-.016.773.006 1.144v.009c.109 1.867.695 3.461 1.428 4.756v.001c.292.516.607.985.926 1.405v.001c1.102 1.455 2.227 2.317 2.514 2.526.441 1.023.4 2.779.4 2.779l.644.215s-.131-1.701.053-2.522c.057-.257.192-.476.349-.662.106-.075.42-.301.797-.645.018-.019.028-.036.044-.054 1.521-1.418 4.362-4.91 3.388-10.599z\"/></svg>",
    color: '47A248',
    backgroundColor: '',
    name: ''
  },
  Node: {
    code: "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Node.js icon</title><path d=\"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z\"/></svg>",
    color: '339933',
    backgroundColor: '',
    name: ''
  },
  Postman: {
    code: "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Postman icon</title><path d=\"M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z\"/></svg>",
    color: 'FF6C37',
    backgroundColor: '',
    name: ''
  },
  React: {
    code: "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>React icon</title><path d=\"M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z\"/></svg>",
    color: '61DAFB',
    backgroundColor: '',
    name: ''
  },
  Redux: {
    code: "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Redux icon</title><path d=\"M16.633 16.504c.869-.075 1.543-.84 1.499-1.754-.046-.914-.795-1.648-1.708-1.648h-.061c-.943.031-1.678.824-1.648 1.769.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.004 4.795-1.603.838-3.296 1.154-4.944.929-1.378-.194-2.456-.81-3.116-1.798-.988-1.499-1.078-3.116-.255-4.734.601-1.169 1.499-2.023 2.099-2.443-.15-.389-.33-1.048-.42-1.542-4.436 3.177-3.985 7.521-2.637 9.574 1.004 1.498 3.057 2.456 5.304 2.456.599 0 1.229-.044 1.843-.194 3.896-.749 6.847-3.086 8.54-6.532l.014-.031zM21.981 12.758c-2.321-2.727-5.738-4.225-9.634-4.225h-.51c-.253-.554-.837-.899-1.497-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074c.675-.03 1.259-.45 1.498-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.004 2.622 2.322 3.236 3.896.538 1.288.509 2.547-.045 3.597-.854 1.647-2.293 2.517-4.195 2.517-1.199 0-2.367-.375-2.967-.644-.359.298-.959.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.093-1.647 5.918-3.236.898-1.798.824-4.824-1.469-7.416l-.014.03zM6.49 17.042c.029.899.793 1.648 1.708 1.648h.06c.959-.03 1.693-.823 1.648-1.768 0-.899-.779-1.647-1.693-1.647h-.061c-.06 0-.149 0-.225.029-1.243-2.098-1.768-4.346-1.572-6.771.119-1.828.719-3.417 1.797-4.735.899-1.124 2.592-1.679 3.746-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.449c-.345-4.914-3.4-7.492-6.322-7.492-2.742 0-5.273 1.993-6.293 4.915-1.393 3.896-.479 7.641 1.229 10.638-.149.195-.239.539-.209.868z\"/></svg>",
    color: '764ABC',
    backgroundColor: '',
    name: ''
  },
  Sass: {
    code: "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Sass icon</title><path d=\"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z\"/></svg>",
    color: 'CC6699',
    backgroundColor: '',
    name: ''
  },
  TypeScript: {
    code: "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>TypeScript icon</title><path d=\"M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z\"/></svg>",
    color: '007ACC',
    backgroundColor: '',
    name: ''
  }
};
var _default = iconLibrary;
exports["default"] = _default;
"use strict";

var _makeIcons = _interopRequireDefault(require("./makeIcons.js"));

var _visibilityFilter = _interopRequireDefault(require("./visibilityFilter.js"));

var _functions = require("./functions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var cardContainer = document.querySelector('.LRcontainer');
var header = document.querySelector('.header');
var mainContainer = document.querySelector('#main-container');
var techListSmall = document.querySelector('.tech');
var techFilterList = document.querySelector('#tech-filter');
var navLinks = document.querySelectorAll('.nav-link');
var techListChildren = techListSmall.children;
var techFilterChildren = techFilterList.children;
var unit = document.body.clientHeight;
(0, _makeIcons["default"])(techListChildren);
(0, _makeIcons["default"])(techFilterChildren);
var techFilter = new _visibilityFilter["default"]();

_toConsumableArray(techFilterChildren).forEach(function (child) {
  child.addEventListener('click', function () {
    var state = true;

    if (child.classList.contains('filter')) {
      child.classList.remove('filter');
      state = false;
    }

    techFilter.toggleFilter(child.className);
    (0, _functions.makeCards)(techFilter.getFilters(), cardContainer);
    child.classList.toggle('filter', state);
  });
});

function chooseColor(scrollPosition) {
  var max = unit * 3;

  if (scrollPosition < unit * 1.01) {
    return scrollPosition / max * 3;
  } else {
    return max * .66 / scrollPosition - 1;
  }
}

function pickCurrentLink(scrollTop) {
  return function (link, index) {
    var currentPage = scrollTop / unit;

    if (currentPage >= index && currentPage < index + 1) {
      if (!link.classList.contains('selected')) {
        link.classList.add('selected');
      }
    } else {
      link.classList.remove('selected');
    }
  };
}

var preloader = (0, _functions.preload)(cardContainer); // This function sets the underline on the navLinks for the currently selected page!
// @ts-ignore

mainContainer.addEventListener('scroll', function (_ref) {
  var scrollTop = _ref.target.scrollTop;
  navLinks.forEach(pickCurrentLink(scrollTop));
  var color = Math.floor(chooseColor(scrollTop) * 255);

  if (scrollTop / unit > 1) {
    preloader();
  }

  header.style.color = "rgb(".concat(color, ",").concat(color, ",").concat(color, ")");
});
var tip = document.getElementById('hint');
var details = document.getElementById('projects');
details.addEventListener('toggle', function () {
  var open = details.open;
  tip.innerText = open ? 'Click A Icon To Filter Projects' : 'pst... click me';
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var makeCard = function makeCard(_ref) {
  var description = _ref.description,
      name = _ref.name,
      languages = _ref.languages,
      DemoLink = _ref.DemoLink,
      source = _ref.SourceCode,
      imgUrl = _ref.imgUrl,
      caption = _ref.caption;
  var card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = "\n        <header><h1>".concat(name, "</h1></header>\n        <div class=\"cardBody\">\n            <div class=\"imageContainer\">\n                <img\n                src=\"").concat(imgUrl, "\" \n                alt=\"pictureText\">\n                <br>\n                <cite><small> ").concat(caption, " </small></cite>\n            </div>\n            <details>\n                <summary>Description</summary>\n                ").concat(description, "\n            </details>\n            <details>\n                <summary>languages</summary>\n                ").concat(languages, "\n            </details>\n            <div class=\"btnContainer\">\n                <a href='").concat(DemoLink, "' target=\"_blank\">Try Me</a>\n                <a href='").concat(source, "' target=\"_blank\">View Source Code</a>\n            </div>\n        </div>\n        <footer><small>Michael Walker</small></footer>\n");
  return card;
};

var _default = makeCard;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeIcons;

var _icons = _interopRequireDefault(require("./icons.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createIcon(icon) {
  var span = document.createElement('span');
  span.innerHTML = icon.code;
  var SVG = span.children[0];
  SVG.style.fill = "#".concat(icon.color);
  return span;
}

function makeIcons(elementList) {
  var _a;

  var icons = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = elementList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var child = _step.value;
      var icon = (_a = _icons["default"][child.id], _a !== null && _a !== void 0 ? _a : _icons["default"][child.className]);
      var span = createIcon(icon);
      icons.push(span);
      child.append(span);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return icons;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var projects = [{
  "name": "The Legend Of Zelda",
  "caption": 'Recreated from scratch!',
  "imgUrl": '../../images/LOZ.webp',
  "languages": ["TypeScript", "JavaScript", "HTML", "CSS"],
  "SourceCode": "https://github.com/miaklwalker/thelegendofzelda",
  "DemoLink": "https://codesandbox.io/s/the-legend-of-zelda-web-version-3x8s2",
  "description": "The Legend of Zelda for the Nintendo Entertainment System.<br>It is a genre-defining masterpiece that needs no introduction.<br> My goal while learning to program was to put off using frameworks.<br>You will find that no frameworks where used in the making of this game.<br>I did use a collision library, but I have previously made several collision systems.<br>This game is and was a massive undertaking.<br>From the research to the extensive replaying of the original, to building a custom debug mode.<br>This project is still in need of work."
}, {
  "name": "Tile Mapper",
  "caption": 'For Mapping 2D Tile-based games',
  "imgUrl": '../../images/tilemapper.webp',
  "languages": ["JavaScript"],
  "SourceCode": "https://github.com/miaklwalker/TileMapper",
  "DemoLink": "https://codesandbox.io/s/tilemapperjs-gimgd",
  "description": "This project was an offshoot of my The Legend Of Zelda remake.<br>The main goal of the project was to speed up the mapping of 2D tile-based games.<br>This project also had ulterior motives.<br>I wanted to use more professional programming practices.<br>Such as clear documentation and examples, helpful comments and <br> eventually publishing it as a package."
}, {
  "name": "Brick Breaker",
  "caption": 'My first Game!',
  "imgUrl": '../../images/brickbreaker.webp',
  "languages": ["JavaScript", "HTML", "CSS"],
  "SourceCode": "https://github.com/miaklwalker/BrickBreaker",
  "DemoLink": "https://reverent-poitras-b46a77.netlify.com/",
  "description": "Brick Breaker was my first attempt at making a real video game.<br> It taught me such much about programming.<br> It also cemented that programming was something I wanted to pursue."
}, {
  "name": "Magic 8 Ball",
  "caption": 'Immutable State and Honest Answers',
  "imgUrl": '../../images/magic8.webp',
  "languages": ["JavaScript", "HTML", "CSS"],
  "SourceCode": "https://github.com/miaklwalker/Magic8Ball",
  "DemoLink": "https://codesandbox.io/s/magic-8-ball-dgocu",
  "description": "To test my fundamentals before learning Redux.<br>I wanted to implement an immutable state app from scratch.<br>With that goal in mind, I created this take on the classic The Magic 8 Ball."
}, {
  "name": "Snake",
  "caption": '2 hour Coding Challenge',
  "imgUrl": '../../images/snake.webp',
  "languages": ["JavaScript", "HTML", "CSS"],
  "SourceCode": "https://github.com/miaklwalker/Snake",
  "DemoLink": "https://www.imawalkersoyoudonthavetobe.com/Snake/",
  "description": "A 2-hour coding challenge I made in my first year of self-learning."
}, {
  "name": "Redux Todo List",
  "caption": 'From The Redux Tutorial Site',
  "imgUrl": '../../images/reactTodo.webp',
  "languages": ["React", "Sass", "JavaScript", "Redux", "Jest"],
  "SourceCode": "https://github.com/miaklwalker/Redux-Todo-List",
  "DemoLink": "https://suspicious-wozniak-174f33.netlify.com/",
  "description": "The React-Redux tutorial project with a bit of extra flair and testing."
}, {
  "name": "Dice Roller",
  "caption": 'My First App Ever',
  "imgUrl": '../../images/diceRoller.webp',
  "languages": ["JavaScript", "HTML", "CSS"],
  "SourceCode": "https://github.com/miaklwalker/DiceRollerMyFirstApp",
  "DemoLink": "https://www.imawalkersoyoudonthavetobe.com/DiceRollerMyFirstApp/",
  "description": "My first web app ever!<br> I have left it unchanged to serve as a ruler for how far I come.<br> It is objectively terrible.<br> I'm still proud of it and myself to this day."
}, {
  "name": "War",
  "caption": 'My first Game , with a light refactor',
  "imgUrl": '../../images/war.webp',
  "languages": ["JavaScript", "HTML", "CSS"],
  "SourceCode": "https://github.com/miaklwalker/WarTypeScript",
  "DemoLink": "https://www.imawalkersoyoudonthavetobe.com/War-JavaScript-Card-Game/",
  "description": "A classic card game I played as a child.<br> My father would bring out the deck of cards and my and I would play game after game.<br> It will always hold a spot in my heart."
}, {
  "name": "BabaIsYou JS",
  "caption": 'remade from scratch in JavaScript',
  "imgUrl": '../../images/babaisyou.webp',
  "languages": ["JavaScript", "HTML", "CSS"],
  "SourceCode": "https://github.com/miaklwalker/JavaScriptIsYou",
  "DemoLink": "https://codesandbox.io/s/browserisyou-rzuxw",
  "description": "A remake of the indie smash hit Baba is you.<br> This was done entirely for educational purposes.<br> It is specifically a remake of the itch.io version.<br> This was my second game programmed in Vanilla JavaScript."
}, {
  "name": "BKeeper",
  "caption": 'My First Full Stack App',
  "imgUrl": '../../images/bkeeper.webp',
  "languages": ["JavaScript", "Bootstrap", "TypeScript", "React", "Cypress"],
  "SourceCode": "https://github.com/miaklwalker/b-keeper",
  "DemoLink": "http://www.band-keeper.com/",
  "description": "My first Full-Stack Application.<br> It uses Mongoose, Express, React, Node.<br> It's a full-featured CRM.<br> It was designed to help music studios manage artist's while letting the focus on what matters.<br> Making good music."
}, {
  "name": "Backend",
  "caption": 'My First Rest Api Backend',
  "imgUrl": '../../images/bkeeper.webp',
  "languages": ["Node", "Postman", "Mongoose", "MongoDB", "Jest"],
  "SourceCode": "https://github.com/miaklwalker/backend",
  "DemoLink": "http://www.band-keeper.com/",
  "description": "My first Full-Stack Application.<br> It uses Mongoose, Express, React, Node.<br> It's a full-featured CRM.<br> It was designed to help music studios manage artist's while letting the focus on what matters.<br> Making good music."
}];
var _default = projects;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VisibilityFilters =
/*#__PURE__*/
function () {
  function VisibilityFilters() {
    _classCallCheck(this, VisibilityFilters);

    this.filters = document.createElement('span');
  }

  _createClass(VisibilityFilters, [{
    key: "getFilters",
    value: function getFilters() {
      if (this.filters.classList.length === 0) {
        return 'AllVisible';
      }

      return _toConsumableArray(this.filters.classList);
    }
  }, {
    key: "toggleFilter",
    value: function toggleFilter(name) {
      this.filters.classList.toggle(name);
    }
  }]);

  return VisibilityFilters;
}();

exports["default"] = VisibilityFilters;
//# sourceMappingURL=main.js.map
