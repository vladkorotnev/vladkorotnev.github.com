//	HYPE.documents["gbb"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "gbb_Resources";
	var documentName = "gbb";
	var documentLoaderFilename = "gbb_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_124 == "undefined") {
		if(typeof window.HYPE_124_DocumentsToLoad == "undefined") {
			window.HYPE_124_DocumentsToLoad = new Array();
			window.HYPE_124_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=124';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_124_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// guard against loading multiple times
	if(HYPE.documents[documentName] != null) {
		return;
	}
	
	var hypeDoc = new HYPE_124();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",aZ:"i",aL:"i",A:"c",Y:"i",X:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{initialValues:{"3":{b:16,z:"1",K:"Solid",c:215,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,O:1,g:"#F0F0F0",aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:"0deg",aJ:6,m:"#D8D8D8",n:"#FFFFFF",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",aM:"3_hover",r:"inline",Z:"break-word",C:"#A0A0A0",aN:"3_pressed",D:"#A0A0A0",t:13,aA:{type:5,goToURL:"http://vladkorotnev.github.com",openInNewWindow:false},F:"center",G:"#000000",aP:"pointer",w:"Back to vladkorotnev.github.com",x:"visible",I:"Solid",a:436,y:"preserve",J:"Solid"},"16":{o:"content-box",h:"1362151775_snow_leopard.png",x:"visible",a:1232,q:"100% 100%",b:489,j:"absolute",r:"inline",aA:{type:1,sceneOid:"19",transition:4},c:128,z:"10",d:128,k:"div",aP:"pointer"},"50":{b:651,z:"12",K:"Solid",c:215,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,O:1,g:"#F0F0F0",aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:"0deg",aJ:6,m:"#D8D8D8",n:"#FFFFFF",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",aM:"50_hover",r:"inline",Z:"break-word",C:"#A0A0A0",aN:"50_pressed",D:"#A0A0A0",t:13,aA:{type:5,goToURL:"http://www.youtube.com/watch?v=2Zn6UfRaqWc&list=PLOhXWhc6IwIEzKVXOJpLxVfBKLOWf4-c2&index=1",openInNewWindow:false},F:"center",G:"#000000",aP:"pointer",w:"Watch the videos",x:"visible",I:"Solid",a:1113,y:"preserve",J:"Solid"},"11":{o:"content-box",h:"meetthe.png",x:"visible",a:1078,q:"100% 100%",b:99,j:"absolute",r:"inline",c:409,k:"div",z:"6",d:136},"14":{o:"content-box",h:"1362151820_Computer.png",x:"visible",a:1279,q:"100% 100%",b:357,j:"absolute",r:"inline",aA:{type:1,sceneOid:"18",transition:6},c:128,z:"8",d:128,k:"div",aP:"pointer"},"17":{o:"content-box",h:"1362151764_iphone%204G%20shadow.png",x:"visible",a:1233,q:"100% 100%",b:489,j:"absolute",r:"inline",aA:{type:1,sceneOid:"21",transition:7},c:128,z:"11",d:128,k:"div",aP:"pointer"},"12":{o:"content-box",h:"Pasted.png",x:"visible",a:-663,q:"100% 100%",b:61,j:"absolute",r:"inline",c:683,k:"div",z:"7",d:718}},sceneIndex:0,timelines:{"3_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"n",e:"#D8D8D8",r:1,s:"#FFFFFF",o:"3"},{f:"2",t:0,d:1,i:"m",e:"#FFFFFF",r:1,s:"#D8D8D8",o:"3"}],identifier:"3_hover",name:"3_hover",duration:1},"6_pressed":{framesPerSecond:30,animations:[],identifier:"6_pressed",name:"6_pressed",duration:0},"5_pressed":{framesPerSecond:30,animations:[],identifier:"5_pressed",name:"5_pressed",duration:0},"4_pressed":{framesPerSecond:30,animations:[],identifier:"4_pressed",name:"4_pressed",duration:0},"50_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"n",e:"#D8D8D8",r:1,s:"#FFFFFF",o:"50"},{f:"2",t:0,d:1,i:"m",e:"#FFFFFF",r:1,s:"#D8D8D8",o:"50"}],identifier:"50_hover",name:"50_hover",duration:1},"3_pressed":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"n",e:"#757475",r:1,s:"#FFFFFF",o:"3"}],identifier:"3_pressed",name:"3_pressed",duration:1},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"a",e:-7,r:1,s:-663,o:"12"},{f:"2",t:0,d:1,i:"a",e:638,r:1,s:1078,o:"11"},{f:"2",t:0,d:1,i:"b",e:99,r:1,s:99,o:"11"},{f:"2",t:0.16666667,d:1.8333334,i:"b",e:489,r:1,s:489,o:"17"},{f:"2",t:1,d:1,i:"a",e:864,r:1,s:1233,o:"17"},{f:"2",t:1.0333333,d:1.0333333,i:"b",e:489,r:1,s:489,o:"16"},{f:"2",t:1.0333333,d:1.0333333,i:"a",e:694,r:1,s:1232,o:"16"},{f:"2",t:1.1,d:1.0333334,i:"a",e:779,r:1,s:1279,o:"14"},{f:"2",t:1.1,d:1.0333334,i:"b",e:356,r:1,s:357,o:"14"},{f:"2",t:1.1333333,d:1.0000001,i:"a",e:745,r:1,s:1113,o:"50"},{f:"2",t:1.1333333,d:1.0000001,i:"b",e:653,r:1,s:651,o:"50"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:2.1333334},"50_pressed":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"n",e:"#757475",r:1,s:"#FFFFFF",o:"50"}],identifier:"50_pressed",name:"50_pressed",duration:1}},perspective:"600px",oid:"1",backgroundColor:"#FFFFFF",name:"Main"},{onSceneAnimationCompleteAction:{type:3,timelineIdentifier:"37"},timelines:{"37":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"a",e:-735,r:1,s:16,o:"27"},{f:"2",t:0,d:1,i:"b",e:86,r:1,s:86,o:"27"},{f:"2",t:0,d:1,i:"a",e:16,r:1,s:1378,o:"28"},{f:"2",t:0,d:1,i:"b",e:42,r:1,s:55,o:"28"},{f:"2",t:0,d:1,i:"b",e:6,r:1,s:16,o:"23"},{f:"2",t:1,d:2,i:"b",e:5,s:6,o:"23"}],identifier:"37",name:"slide2",duration:3},"23_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"n",e:"#D8D8D8",r:1,s:"#FFFFFF",o:"23"},{f:"2",t:0,d:1,i:"m",e:"#FFFFFF",r:1,s:"#D8D8D8",o:"23"}],identifier:"23_hover",name:"23_hover",duration:1},"23_pressed":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"n",e:"#757475",r:1,s:"#FFFFFF",o:"23"}],identifier:"23_pressed",name:"23_pressed",duration:1},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.96666664,i:"a",e:16,r:1,s:1074,o:"27"},{f:"2",t:0,d:0.96666664,i:"b",e:86,r:1,s:86,o:"27"},{f:"2",t:0,d:0.96666664,i:"a",e:714,r:1,s:1117,o:"36"},{f:"2",t:0,d:0.96666664,i:"b",e:278,r:1,s:283,o:"36"},{f:"2",t:0.96666664,d:2.0333333,i:"a",e:715,s:714,o:"36"},{f:"2",t:1,d:1.9666667,i:"a",e:822,r:1,s:885,o:"39"},{f:"2",t:1,d:1.0333333,i:"b",e:852,r:1,s:853,o:"39"},{f:"2",t:2.0333333,d:0.9333334,i:"b",e:471,s:852,o:"39"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:3},"38":{framesPerSecond:30,animations:[],identifier:"38",name:"slide3",duration:0}},sceneIndex:1,perspective:"600px",initialValues:{"28":{o:"content-box",h:"GBBrowser2.PNG",x:"visible",a:1378,q:"100% 100%",b:55,j:"absolute",r:"inline",c:665,k:"div",z:"5",d:739},"36":{o:"content-box",h:"windows1.png",x:"visible",a:1117,q:"100% 100%",b:283,j:"absolute",r:"inline",c:470,z:"1",k:"div",d:209,aP:"pointer"},"39":{o:"content-box",w:"",h:"Pasted-1.png",x:"visible",a:885,q:"100% 100%",b:853,j:"absolute",r:"inline",aA:{type:5,goToURL:"http://isounds.tk/gbb/GBB-win.exe",openInNewWindow:false},c:128,z:"2",d:128,k:"div",aP:"pointer",u:"italic"},"27":{o:"content-box",h:"GBBrowser1.PNG",x:"visible",a:1074,q:"100% 100%",b:86,j:"absolute",r:"inline",c:679,k:"div",z:"4",d:595},"23":{b:16,z:"3",K:"Solid",c:87,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,O:1,g:"#F0F0F0",aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:"0deg",aJ:6,m:"#D8D8D8",n:"#FFFFFF",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",aM:"23_hover",r:"inline",Z:"break-word",C:"#A0A0A0",aN:"23_pressed",D:"#A0A0A0",t:13,aA:{type:1,sceneOid:"1",transition:7},F:"center",G:"#000000",aP:"pointer",w:"Back",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"}},oid:"18",backgroundColor:"#FFFFFF",name:"For windows"},{onSceneAnimationCompleteAction:{type:3,timelineIdentifier:"kTimelineDefaultIdentifier"},timelines:{"24_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"n",e:"#D8D8D8",r:1,s:"#FFFFFF",o:"24"},{f:"2",t:0,d:1,i:"m",e:"#FFFFFF",r:1,s:"#D8D8D8",o:"24"}],identifier:"24_hover",name:"24_hover",duration:1},"24_pressed":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"n",e:"#757475",r:1,s:"#FFFFFF",o:"24"}],identifier:"24_pressed",name:"24_pressed",duration:1},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:5,i:"b",e:767,r:1,s:768,o:"46"},{f:"2",t:0,d:7,i:"a",e:0,r:1,s:0,o:"46"},{f:"2",t:1,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"42"},{f:"2",t:1.1,d:0.99999988,i:"e",e:"0.000000",r:1,s:"1.000000",o:"43"},{f:"2",t:2,d:1,i:"e",e:"1.000000",s:"1.000000",o:"42"},{f:"2",t:2.0999999,d:3.9000001,i:"e",e:"0.008386",s:"0.000000",o:"43"},{f:"2",t:3,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"44"},{f:"2",t:3,d:1,i:"e",e:"0.000000",s:"1.000000",o:"42"},{f:"2",t:4,d:2,i:"e",e:"0.999317",s:"1.000000",o:"44"},{f:"2",t:5,d:1,i:"b",e:57,s:767,o:"46"},{f:"2",t:6,d:0.13333321,i:"e",e:"0.000000",s:"0.999317",o:"44"},{f:"2",t:6,d:0.13333321,i:"e",e:"1.000000",s:"0.008386",o:"43"},{f:"2",t:6,d:1,i:"b",e:58,s:57,o:"46"},{f:"2",t:7,d:1,i:"b",e:768,s:58,o:"46"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:8}},sceneIndex:2,perspective:"600px",initialValues:{"42":{o:"content-box",h:"Pasted-3.png",x:"visible",a:0,q:"100% 100%",b:61,j:"absolute",r:"inline",c:683,z:"4",k:"div",d:718,e:"0.000000"},"24":{b:16,z:"1",K:"Solid",c:87,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,O:1,g:"#F0F0F0",aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:"0deg",aJ:6,m:"#D8D8D8",n:"#FFFFFF",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",aM:"24_hover",r:"inline",Z:"break-word",C:"#A0A0A0",aN:"24_pressed",D:"#A0A0A0",t:13,aA:{type:1,sceneOid:"1",transition:5},F:"center",G:"#000000",aP:"pointer",w:"Back",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"48":{o:"content-box",h:"OSX.png",x:"visible",a:646,q:"100% 100%",b:103,j:"absolute",r:"inline",c:412,k:"div",z:"7",d:649},"43":{o:"content-box",h:"Pasted-2.png",x:"visible",a:0,q:"100% 100%",b:61,j:"absolute",r:"inline",c:683,z:"2",k:"div",d:718,e:"1.000000"},"46":{o:"content-box",h:"Pasted-5.png",x:"visible",a:0,q:"100% 100%",b:768,j:"absolute",r:"inline",c:684,k:"div",z:"6",d:721},"49":{o:"content-box",h:"Pasted-6.png",x:"visible",a:994,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:{type:5,goToURL:"http://isounds.tk/gbb/GBB-OSX.zip",openInNewWindow:false},c:64,z:"8",d:64,k:"div",aP:"pointer"},"44":{o:"content-box",h:"Pasted-4.png",x:"visible",a:0,q:"100% 100%",b:61,j:"absolute",r:"inline",c:683,z:"5",k:"div",d:718,e:"0.000000"}},oid:"19",backgroundColor:"#FFFFFF",name:"For mac"},{initialValues:{"52":{o:"content-box",h:"gbbiphone1.png",x:"visible",a:-2,q:"100% 100%",b:169,j:"absolute",r:"inline",c:255,k:"div",z:"3",d:599},"26":{b:16,z:"1",K:"Solid",c:87,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,O:1,g:"#F0F0F0",aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:"0deg",aJ:6,m:"#D8D8D8",n:"#FFFFFF",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",aM:"26_hover",r:"inline",Z:"break-word",C:"#A0A0A0",aN:"26_pressed",D:"#A0A0A0",t:13,aA:{type:1,sceneOid:"1",transition:6},F:"center",G:"#000000",aP:"pointer",w:"Back",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"55":{o:"content-box",h:"mobility.png",x:"visible",a:169,q:"100% 100%",b:37,j:"absolute",r:"inline",c:520,k:"div",z:"6",d:200},"53":{o:"content-box",h:"gbbiphone2.png",x:"visible",a:293,q:"100% 100%",b:237,j:"absolute",r:"inline",c:287,k:"div",z:"4",d:526},"56":{b:61,z:"7",K:"Solid",c:87,L:"Solid",d:15,aS:6,M:1,bD:"none",aT:6,N:1,O:1,g:"#F0F0F0",aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:"0deg",aJ:6,m:"#D8D8D8",n:"#FFFFFF",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",aM:"56_hover",r:"inline",Z:"break-word",C:"#A0A0A0",aN:"56_pressed",D:"#A0A0A0",t:13,aA:{type:5,goToURL:"http://www.youtube.com/watch?v=2Zn6UfRaqWc&list=PLOhXWhc6IwIEzKVXOJpLxVfBKLOWf4-c2&index=1",openInNewWindow:true},F:"center",G:"#000000",aP:"pointer",w:"Video",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"51":{o:"content-box",h:"app_store_badge.png",x:"visible",a:708,q:"100% 100%",b:31,j:"absolute",r:"inline",aA:{type:5,goToURL:"https://itunes.apple.com/us/app/gbbrowser-mobile/id602644722?mt=8",openInNewWindow:true},c:350,z:"2",d:114,k:"div",aP:"pointer"},"54":{o:"content-box",h:"gbbipad.png",x:"visible",a:599,q:"100% 100%",b:137,j:"absolute",r:"inline",c:482,k:"div",z:"5",d:626}},sceneIndex:3,timelines:{"56_pressed":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"n",e:"#757475",r:1,s:"#FFFFFF",o:"56"}],identifier:"56_pressed",name:"56_pressed",duration:1},"26_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"n",e:"#D8D8D8",r:1,s:"#FFFFFF",o:"26"},{f:"2",t:0,d:1,i:"m",e:"#FFFFFF",r:1,s:"#D8D8D8",o:"26"}],identifier:"26_hover",name:"26_hover",duration:1},"26_pressed":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"n",e:"#757475",r:1,s:"#FFFFFF",o:"26"}],identifier:"26_pressed",name:"26_pressed",duration:1},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0},"56_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"n",e:"#D8D8D8",r:1,s:"#FFFFFF",o:"56"},{f:"2",t:0,d:1,i:"m",e:"#FFFFFF",r:1,s:"#D8D8D8",o:"56"}],identifier:"56_hover",name:"56_hover",duration:1}},perspective:"600px",oid:"21",backgroundColor:"#FFFFFF",name:"For iOS"}];


	
	var javascripts = [];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("gbb_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(true);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

