var a=['shift','imageSmoothingQuality','high','drawImage','getImageData','removeEventListener','change','addEventListener','touchstart','touchend','hammer','swiperight','#src','doubletap','scroll','result','readAsDataURL','getElementById','getContext','dest_file','src_file','getBoundingClientRect','top','draw','touches','clientX','clientY','strokeStyle','lineWidth','lineJoin','round','lineCap','beginPath','moveTo','lineTo','stroke','startSelcting','setSelectedArea','data','touchmove','off','moving','putImageData','calResultCanvasOffset','left','startMovingBlendPos','finishMovingBlendPos','length','abs','save','href','inverseRGB','dest','preventDefault','stopPropagation','target','type','file','files','dataTransfer','onload','log','load\x20Image','height','width','push','input\x20vertically\x20long\x20image','pop','src','input\x20horizontally\x20long\x20image'];(function(c,d){var e=function(f){while(--f){c['push'](c['shift']());}};e(++d);}(a,0x1d8));var b=function(c,d){c=c-0x0;var e=a[c];return e;};const max_canvas_size=0xeb;const select_color=[0x0,0xff,0xff,0xff];var fit_width=new Array();var fit_height=new Array();var loaded_img_count=0x0;var dest_canvas,src_canvas,result_canvas;var dest_ctx,src_ctx,result_ctx;var dest_img,src_img,result_img;var dest_file,src_file;var selected_pixels;function initCanvas(c){var d=new Image();if(c==b('0x0')){var e=dest_ctx;var f=dest_canvas;d=dest_img;}else if(c=='src'){var e=src_ctx;var f=src_canvas;d=src_img;}else{return null;}var i=function(j){j[b('0x1')]();j[b('0x2')]();return![];};var k=function(l){l['preventDefault']();if(l[b('0x3')][b('0x4')]==b('0x5')){var m=l['target'][b('0x6')][0x0];}else{var m=l[b('0x7')][b('0x6')][0x0];}d[b('0x8')]=function(){console[b('0x9')](b('0xa')+'\x20'+c);var o=d[b('0xb')]/d[b('0xc')];if(~~(o*max_canvas_size)>=max_canvas_size){fit_width[b('0xd')](~~(max_canvas_size/o));fit_height[b('0xd')](max_canvas_size);}else{fit_width[b('0xd')](max_canvas_size);fit_height[b('0xd')](~~(max_canvas_size*o));}var p=!![];if(loaded_img_count>0x0){if(c==='src'&&fit_width[0x1]>fit_width[0x0]||c===b('0x0')&&fit_width[0x1]<fit_width[0x0]){alert(b('0xe'));fit_width[b('0xf')]();fit_height[b('0xf')]();p=![];}else if(c===b('0x10')&&fit_height[0x1]>fit_height[0x0]||c===b('0x0')&&fit_height[0x1]<fit_height[0x0]){alert(b('0x11'));fit_width['pop']();fit_height[b('0xf')]();p=![];}else{fit_width[b('0x12')]();fit_height[b('0x12')]();p=!![];}}if(p){f['width']=fit_width[0x0];f['height']=fit_height[0x0];e[b('0x13')]=b('0x14');e['drawImage'](this,0x0,0x0,f['width'],f['height']);++loaded_img_count;if(c==b('0x0')){result_canvas[b('0xc')]=f[b('0xc')];result_canvas[b('0xb')]=f[b('0xb')];result_img=d;result_img[b('0x8')]=new function(){e[b('0x13')]=b('0x14');result_ctx[b('0x15')](result_img,0x0,0x0,result_canvas[b('0xc')],result_canvas['height']);++loaded_img_count;}();}if(loaded_img_count===0x3){pixels=src_ctx[b('0x16')](0x0,0x0,src_canvas[b('0xc')],src_canvas[b('0xb')]);original_src_pixels=pixels;dest_file[b('0x17')]('change',k,![]);src_file[b('0x17')](b('0x18'),k,![]);calSourceCanvasOffset();src_canvas[b('0x19')]('touchmove',draw,!![]);src_canvas['addEventListener'](b('0x1a'),startSelcting,!![]);src_canvas[b('0x19')](b('0x1b'),finishSelcting,!![]);$('#src')[b('0x1c')]()['on'](b('0x1d'),setSelectedArea);$(b('0x1e'))[b('0x1c')]()['on'](b('0x1f'),setSelectedArea);window[b('0x19')](b('0x20'),calSourceCanvasOffset);}}};var q=new FileReader();q[b('0x8')]=function(r){d[b('0x10')]=r['target'][b('0x21')];};q[b('0x22')](m);};if(c==b('0x0')){dest_file[b('0x19')](b('0x18'),k,![]);}else if(c==b('0x10')){src_file[b('0x19')](b('0x18'),k,![]);}};window[b('0x8')]=new function(){dest_canvas=document[b('0x23')]('dest');src_canvas=document[b('0x23')](b('0x10'));result_canvas=document[b('0x23')](b('0x21'));dest_ctx=dest_canvas[b('0x24')]('2d');src_ctx=src_canvas['getContext']('2d');result_ctx=result_canvas[b('0x24')]('2d');dest_file=document[b('0x23')](b('0x25'));src_file=document[b('0x23')](b('0x26'));dest_img=new Image();src_img=new Image();result_img=new Image();initCanvas(b('0x0'));initCanvas(b('0x10'));}();var isSelecting=![];prev_point={'x':0x0,'y':0x0};var src_canvas_offset={'y':0x0};var pixels;var original_src_pixels;function calSourceCanvasOffset(){console['log']('calSourceCanvasOffset');var s=src_canvas[b('0x27')]();src_canvas_offset['x']=s['left'];src_canvas_offset['y']=s[b('0x28')];}function draw(t){t[b('0x1')]();if(isSelecting){console[b('0x9')](b('0x29'));var u=t[b('0x2a')][0x0][b('0x2b')]-src_canvas_offset['x'];var v=t[b('0x2a')][0x0][b('0x2c')]-src_canvas_offset['y'];var w=~~(0x4*(u+src_canvas[b('0xc')]*v));src_ctx[b('0x2d')]='rgba('+select_color[0x0]+','+select_color[0x1]+','+select_color[0x2]+','+0x1+')';src_ctx[b('0x2e')]=0x1e;src_ctx[b('0x2f')]=b('0x30');src_ctx[b('0x31')]=b('0x30');src_ctx[b('0x32')]();src_ctx[b('0x33')](prev_point['x'],prev_point['y']);src_ctx[b('0x34')](u,v);src_ctx[b('0x35')]();src_ctx['closePath']();prev_point['x']=u;prev_point['y']=v;}}function startSelcting(x){console['log'](b('0x36'));isSelecting=!![];prev_point['x']=x[b('0x2a')][0x0]['clientX']-src_canvas_offset['x'];prev_point['y']=x[b('0x2a')][0x0][b('0x2c')]-src_canvas_offset['y'];}function finishSelcting(y){console[b('0x9')]('finishSelcting');isSelecting=![];}var selected_position_moved={'x':0x0,'y':0x0};function setSelectedArea(z){console[b('0x9')](b('0x37'));isSelecting=![];var A=dest_ctx[b('0x16')](0x0,0x0,dest_canvas[b('0xc')],dest_canvas[b('0xb')]);var B=src_ctx['getImageData'](0x0,0x0,src_canvas[b('0xc')],src_canvas[b('0xb')]);var C=result_ctx[b('0x16')](0x0,0x0,result_canvas['width'],result_canvas[b('0xb')]);selected_pixels=dest_ctx[b('0x16')](0x0,0x0,dest_canvas[b('0xc')],dest_canvas[b('0xb')]);for(var D=0x1;D<src_canvas[b('0xc')]-0x1;D++){for(var E=0x1;E<src_canvas[b('0xb')]-0x1;E++){var F=0x4*(D+E*src_canvas[b('0xc')]);if(B[b('0x38')][F+0x0]==select_color[0x0]&&B[b('0x38')][F+0x1]==select_color[0x1]&&B[b('0x38')][F+0x2]==select_color[0x2]){var G=F+0x4*(selected_position_moved['x']+selected_position_moved['y']*src_canvas['width']);for(var H=0x0;H<0x3;H++){C[b('0x38')][G+H]=original_src_pixels[b('0x38')][F+H];selected_pixels[b('0x38')][F+H]=B[b('0x38')][F+H];}}}}result_ctx['putImageData'](C,0x0,0x0);src_canvas[b('0x17')](b('0x39'),draw,!![]);src_canvas[b('0x17')]('touchstart',startSelcting,!![]);src_canvas['removeEventListener'](b('0x1b'),finishSelcting,!![]);$(b('0x1e'))[b('0x1c')]()[b('0x3a')](b('0x1d'),setSelectedArea);$(b('0x1e'))[b('0x1c')]()[b('0x3a')](b('0x1f'),setSelectedArea);calResultCanvasOffset();result_canvas[b('0x19')]('touchmove',moveingBlendPos,![]);result_canvas[b('0x19')](b('0x1a'),startMovingBlendPos,![]);result_canvas['addEventListener'](b('0x1b'),finishMovingBlendPos,![]);window['addEventListener']('scroll',calResultCanvasOffset);}prev_point2={'x':0x0,'y':0x0};var result_canvas_offset={'x':0x0,'y':0x0};var moving=![];function moveingBlendPos(I){var J=dest_ctx['getImageData'](0x0,0x0,dest_canvas[b('0xc')],dest_canvas[b('0xb')]);if(moving){console[b('0x9')](b('0x3b'));var K=I[b('0x2a')][0x0][b('0x2b')]-result_canvas_offset['x'];var L=I[b('0x2a')][0x0][b('0x2c')]-result_canvas_offset['y'];selected_position_moved['x']=~~(K-prev_point2['x']);selected_position_moved['y']=~~(L-prev_point2['y']);result_ctx[b('0x3c')](J,0x0,0x0);setSelectedArea();}}function calResultCanvasOffset(M){console['log'](b('0x3d'));var N=result_canvas[b('0x27')]();result_canvas_offset['x']=N[b('0x3e')];result_canvas_offset['y']=N[b('0x28')];}function startMovingBlendPos(O){console['log'](b('0x3f'));moving=!![];prev_point2['x']=O[b('0x2a')][0x0][b('0x2b')]-result_canvas_offset['x'];prev_point2['y']=O[b('0x2a')][0x0][b('0x2c')]-result_canvas_offset['y'];}function finishMovingBlendPos(P){console[b('0x9')](b('0x40'));moving=![];}function poissonImporting(Q){var R=dest_ctx[b('0x16')](0x0,0x0,dest_canvas[b('0xc')],dest_canvas[b('0xb')]);var S=src_ctx[b('0x16')](0x0,0x0,src_canvas[b('0xc')],src_canvas[b('0xb')]);var T=dest_ctx[b('0x16')](0x0,0x0,dest_canvas['width'],dest_canvas[b('0xb')]);const U=result_canvas[b('0xb')];const V=result_canvas[b('0xc')];var W,X,Y;var Z=0x1;var a0=0x0;while(!![]){W=0x0;X=0x0;for(var a1=0x1;a1<U-0x1;a1++){for(var a2=0x1;a2<V-0x1;a2++){var a3=(a1*V+a2)*0x4;if(selected_pixels[b('0x38')][a3+0x0]===select_color[0x0]&&selected_pixels[b('0x38')][a3+0x1]===select_color[0x1]&&selected_pixels[b('0x38')][a3+0x2]===select_color[0x2]&&selected_pixels[b('0x38')][a3+0x3]===select_color[0x3]){var a4=a3+~~0x4*(selected_position_moved['x']+selected_position_moved['y']*V);var a5=[((a1-0x1)*V+a2)*0x4,((a1+0x1)*V+a2)*0x4,(a1*V+(a2-0x1))*0x4,(a1*V+(a2+0x1))*0x4];var a6=a5[b('0x41')];for(var a7=0x0;a7<0x3;a7++){var a8=0x0;var a9=0x0;var aa=0x0;for(var ab=0x0;ab<a6;ab++){var ac=a5[ab]+0x4*(selected_position_moved['x']+selected_position_moved['y']*V);var ad=T[b('0x38')][ac+a7];var ae=R[b('0x38')][a4+a7];var af=R[b('0x38')][ac+a7];var ag=original_src_pixels['data'][a3+a7];var ah=original_src_pixels[b('0x38')][a5[ab]+a7];if(selected_pixels[b('0x38')][a5[ab]+0x0]===select_color[0x0]&&selected_pixels[b('0x38')][a5[ab]+0x1]===select_color[0x1]&&selected_pixels[b('0x38')][a5[ab]+0x2]===select_color[0x2]&&selected_pixels[b('0x38')][a5[ab]+0x3]===select_color[0x3]){a8+=ad;}else{a9+=af;}if(Q===0x1){aa+=Math['abs'](ag-ah)>Math[b('0x42')](ae-af)?ag-ah:ae-af;}else{aa+=ag-ah;}}new_fp=(a8+aa+a9)/a6;W+=Math[b('0x42')](new_fp-R[b('0x38')][a4+a7]);X+=Math[b('0x42')](new_fp);T[b('0x38')][a4+a7]=new_fp;}}}}var ai=0x3e8*W/X;ai*=0.001;if(Z===ai){break;}a0++;if(a0>0x96){a0=0x0;break;}Z=ai;console[b('0x9')](W,ai);};result_ctx[b('0x3c')](T,0x0,0x0);}function debug(){var aj=dest_ctx['getImageData'](0x0,0x0,dest_canvas[b('0xc')],dest_canvas[b('0xb')]);var ak=src_ctx[b('0x16')](0x0,0x0,src_canvas[b('0xc')],src_canvas[b('0xb')]);var al=result_ctx[b('0x16')](0x0,0x0,result_canvas[b('0xc')],result_canvas[b('0xb')]);result_ctx[b('0x3c')](aj,0x0,0x0);}function save(){console['log'](b('0x43'));document[b('0x23')](b('0x43'))[b('0x44')]=result_canvas['toDataURL']();}function reset(){prev_point2['x']=prev_point2['y']=0x0;selected_position_moved['x']=selected_position_moved['y']=0x0;result_ctx[b('0x3c')](dest_ctx[b('0x16')](0x0,0x0,dest_canvas[b('0xc')],dest_canvas[b('0xb')]),0x0,0x0);src_ctx[b('0x3c')](original_src_pixels,0x0,0x0);result_canvas[b('0x17')](b('0x39'),moveingBlendPos,![]);result_canvas['removeEventListener'](b('0x1a'),startMovingBlendPos,![]);result_canvas[b('0x17')](b('0x1b'),finishMovingBlendPos,![]);calSourceCanvasOffset();src_canvas[b('0x19')]('touchmove',draw,!![]);src_canvas['addEventListener'](b('0x1a'),startSelcting,!![]);src_canvas[b('0x19')](b('0x1b'),finishSelcting,!![]);$(b('0x1e'))[b('0x1c')]()['on'](b('0x1d'),setSelectedArea);$(b('0x1e'))[b('0x1c')]()['on'](b('0x1f'),setSelectedArea);}function inverseRGB(){console[b('0x9')](b('0x45'));var am=result_ctx[b('0x16')](0x0,0x0,result_canvas[b('0xc')],result_canvas[b('0xb')]);var an=am[b('0xc')]*am[b('0xb')]*0x4;for(var ao=0x0;ao<an;ao+=0x4){var ap=am[b('0x38')][ao+0x0];var aq=am[b('0x38')][ao+0x1];var ar=am['data'][ao+0x2];am[b('0x38')][ao+0x0]=0xff-ap;am[b('0x38')][ao+0x1]=0xff-aq;am[b('0x38')][ao+0x2]=0xff-ar;}result_ctx[b('0x3c')](am,0x0,0x0);}