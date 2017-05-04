let STYLE_ANIMATED = `

  @-webkit-keyframes type{
    from { width: 0; }
  }

  @-webkit-keyframes type2{
    0%{width: 0;}
    50%{width: 0;}
    100%{ width: 100; }
  }

  @keyframes type{
    from { width: 0; }
  }

  @keyframes type2{
    0%{width: 0;}
    50%{width: 0;}
    100%{ width: 100; }
  }

`;

let STYLE = `

  #TEMPLATE_ID {
    position: fixed !important;
    width: 100% !important;
    height: 100% !important;
    background: BACKGROUND_VALUE;
    padding-top: 15% !important;
    text-align: center !important;
    z-index: 99999999 !important;
    top: 0 !important;
    left: 0 !important;
    opacity: 1 !important;
    bottom: 0 !important;
    overflow: hidden !important;
  }

  #TEMPLATE_ID p{
    color: TEXT_COLOR_VALUE;
    text-decoration: none;
    font-family: "Courier";
    font-size: 30px;
    margin: 10px 0 0 10px;
    white-space: nowrap;
    overflow: hidden;
    width: 30em;
    margin: 0 auto;
    animation: type 4s steps(60, end) infinite;
    -webkit-animation: type 4s steps(60, end) infinite;
  }

  #TEMPLATE_ID p:nth-child(2){
    animation: type2 8s steps(60, end) infinite;
    -webkit-animation: type2 8s steps(60, end) infinite;
  }

  .sk-folding-cube {
    margin: 40px auto;
    width: 40px;
    height: 40px;
    position: relative;
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }

  .sk-folding-cube .sk-cube {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  .sk-folding-cube .sk-cube:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ICON_COLOR_VALUE;
    -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
    animation: sk-foldCubeAngle 2.4s infinite linear both;
    -webkit-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }

  .sk-folding-cube .sk-cube2 {
    -webkit-transform: scale(1.1) rotateZ(90deg);
            transform: scale(1.1) rotateZ(90deg);
  }

  .sk-folding-cube .sk-cube3 {
    -webkit-transform: scale(1.1) rotateZ(180deg);
            transform: scale(1.1) rotateZ(180deg);
  }

  .sk-folding-cube .sk-cube4 {
    -webkit-transform: scale(1.1) rotateZ(270deg);
            transform: scale(1.1) rotateZ(270deg);
  }

  .sk-folding-cube .sk-cube2:before {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
  }

  .sk-folding-cube .sk-cube3:before {
    -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
  }

  .sk-folding-cube .sk-cube4:before {
    -webkit-animation-delay: 0.9s;
            animation-delay: 0.9s;
  }

  @-webkit-keyframes sk-foldCubeAngle {
    0%, 10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
              transform: perspective(140px) rotateX(-180deg);
      opacity: 0; }
    25%, 75% {
      -webkit-transform: perspective(140px) rotateX(0deg);
              transform: perspective(140px) rotateX(0deg);
      opacity: 1; }
    90%, 100% {
      -webkit-transform: perspective(140px) rotateY(180deg);
              transform: perspective(140px) rotateY(180deg);
      opacity: 0; } }

  @keyframes sk-foldCubeAngle {
    0%, 10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
              transform: perspective(140px) rotateX(-180deg);
      opacity: 0; }
    25%, 75% {
      -webkit-transform: perspective(140px) rotateX(0deg);
              transform: perspective(140px) rotateX(0deg);
      opacity: 1; }
    90%, 100% {
      -webkit-transform: perspective(140px) rotateY(180deg);
              transform: perspective(140px) rotateY(180deg);
      opacity: 0; } }

`;

let TEMPLATE = `
  <div id="TEMPLATE_ID">
      <div>
        <div class="row">
          <div class="sk-folding-cube">
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
          </div>
        </div>
        <br>
        <div style="width: 100%;display: flex;">
          <p align="center">TEXT_LOADING</p>
        </div>
      <div>
  </div>
`;

((self, dom, parser) => {
  if(!self) return;
  if(!dom) return;
  if(!parser) return;

  let config = {
    background: 'rgba(0, 0, 0, 0.80)',
    textColor: '#FFFFFF',
    iconColor: '#00E5FF',
    animated: false
  };

  const STYLE_ID    = 'loading-easy-style';
  const TEMPLATE_ID = 'loading-easy-container';

  let   body = dom.getElementsByTagName('body')[0]
      , element = undefined
      , styleElement = undefined
      , elementText = undefined
      , head = dom.getElementsByTagName('head')[0];

  /** Altera todas as ocorrências de uma string
   *  @param str - string a ser alterada
   *  @param search - string que sera substituida
   *  @param replacement - string com novo valor a ser inserido
  */
  const replaceAll = (str, search, replacement) => str.replace(new RegExp(search, 'g'), replacement);

  /** Esconde um elemento informado por parametro
   *  @param element
  */
  const hiddenElement = (element) => element.style.display = 'none';

  /** Mostra um elemento informado por parametro
   *  @param element
  */
  const showElement = (element) => element.style.display = 'block';

  /** Adiciona o elemento loading na body
   *  @param callback - função executada após de adicionar o elemento
  */
  const addElementInBody = (callback) => {
    if(element && body && body.contains(element)){
      body.removeChild(element);
    }
    TEMPLATE =  replaceAll(TEMPLATE, 'TEMPLATE_ID', TEMPLATE_ID);
    let elementDOM = parser.parseFromString(TEMPLATE, "text/html");
    element = elementDOM.getElementById(TEMPLATE_ID);
    elementText = element.querySelector('p');
    hiddenElement(element);
    dom.body.insertBefore(element, dom.body.firstChild);
    if(callback) callback();
  }

  const getConfigValues = (customConfig) => {
    if(!customConfig) return config;
    return {
      background:  customConfig.hasOwnProperty('background') ? customConfig.background  : config.background,
      iconColor:   customConfig.hasOwnProperty('iconColor')  ? customConfig.iconColor   : config.iconColor,
      textColor:   customConfig.hasOwnProperty('textColor')  ? customConfig.textColor   : config.textColor,
      animated:   customConfig.hasOwnProperty('animated')  ? customConfig.animated   : config.animated
    };
  }

  /** Adiciona o style na head
   *  @param config - Muda as configurações de cores e animação
  */
  const addStyleInBody = (customConfig) => {
    if(styleElement && head && head.contains(styleElement)){
      head.removeChild(styleElement);
    }
    if(head){
      let newConfig = getConfigValues(customConfig);
      var STYLE_CLONE = JSON.parse(JSON.stringify(STYLE));
      STYLE_CLONE =  replaceAll(STYLE_CLONE, 'BACKGROUND_VALUE', newConfig.background);
      STYLE_CLONE =  replaceAll(STYLE_CLONE, 'TEXT_COLOR_VALUE', newConfig.textColor);
      STYLE_CLONE =  replaceAll(STYLE_CLONE, 'ICON_COLOR_VALUE', newConfig.iconColor);
      STYLE_CLONE =  replaceAll(STYLE_CLONE, 'TEMPLATE_ID', TEMPLATE_ID);

      if((/^true$/i).test(newConfig.animated)){
        STYLE_CLONE = STYLE_CLONE.concat(STYLE_ANIMATED);
      }

      styleElement = dom.createElement('style');
      styleElement.type = 'text/css';
      styleElement.id = STYLE_ID;
      if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = STYLE_CLONE;
      }else{
          styleElement.appendChild(dom.createTextNode(STYLE_CLONE));
      }
      head.appendChild(styleElement);
    }
  }

  /** Inicia o carregamento
   *  @param text
  */
  const initLoading = (text, config) => {
      if(config){
        addStyleInBody(config);
      }
      if(!element || !elementText){
        addElementInBody(() => initLoading(text));
        return;
      }
      elementText.innerHTML = text || "";
      showElement(element);
  }

  const finishLoading = () => {
      if(!element || !elementText){
        addElementInBody(() => initLoading(text));
        return;
      }
      elementText.innerHTML = "";
      hiddenElement(element);
  }

  const Loading = {
    init  : initLoading,
    finish: finishLoading
  }

  addStyleInBody();
  addElementInBody();

  self.LoadingEasy = Loading;

})(window, window.document, new window.DOMParser());
