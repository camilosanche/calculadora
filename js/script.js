eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('8 23="";1c.21=j(){8 f="";8 H=G;8 r=[];8 D=[{"l":"22","s":"+","h":1N},{"l":"29","s":"-","h":1P},{"l":"20�n","s":"x","h":1C},{"l":"1R�n","s":"%","h":1J}];O(8 i=0;i<=9;i++){v("1K"+i).1j(\'19\',j(I){m(I.1h.1f.R("1m")[1],1)});g(i>=1&&i<=4){v("2m"+i).1j(\'19\',j(I){8 s=y(I.1h.1f.R("1m")[1]);m(D[s-1].s,2)})}g(i>=1&&i<=7){v("2k"+i).1j(\'19\',j(I){8 1B=y(I.1h.1f.R("1m")[1]);1D(1B){q 1:m("",3);p;q 2:m("",4);p;q 3:m("",5);p;q 4:m("(",6);p;q 5:m(")",7);p;q 6:1e();p;q 7:1i();p}})}}8 1i=j(){H=!H;8 1d="2F";8 17=".";g(H){1d="1U�n";17="/"}2a.W=1d;v("26").W=17;m("",5)};8 m=j(u,l){8 B=G;8 Q=H?"/":".";g(l===1){f+=u;8 M=0;r[M]="";O(8 c=0;c<f.k;c++){g(!14(f.E(c))||f.E(c)===Q){g(f.E(c)!=="("&&f.E(c)!==")"){r[M]+=f.E(c)}}o{M++;r[M]=""}}B=C}o{g(l===2){8 Z=f.E(f.k-1);g(!14(Z)){B=C;f+=u}}o{g(l===3){B=C;f="";r=[]}o{g(l===4){g(f!==""){8 1z=r[r.k-1];g(1z.N(Q)<0){B=C;f+=Q;r[r.k-1]+=Q}}}o{g(l===5){g(f!==""){8 Z=f.E(f.k-1);g(14(Z)){f=f.1l(0,f.k-1)}8 S=[{12:"x",1v:"*"},{12:"%",1v:"/"}];O(8 i 1y S){2f{g(f.N(S[i].12)>=0){f=f.1E(S[i].12,S[i].1v)}o{p}}2b(1)}2c{8 L=2g(f);g(H&&U(L).N(".")>=0){L=1O(L)}f=U(L);r=[];r[0]=f;B=C}1Z(e){1X({1Y:"1S 1W 1V 1T�n",2d:e.2E,2A:G,2z:"#2y",2w:"2h",2B:G,2C:"2G"})}}}o{g(l===6||l===7){f+=u;B=C}}}}}}g(B){1t();v("1a").W=f}};8 14=j(s){8 1k=G;O(8 c 1y D){g(D[c].s===s){1k=C;p}}J 1k};8 1e=j(){g(f.k>=0){f=f.1l(0,f.k-1);1t();v("1a").W=f}};8 1t=j(){8 V=2u;8 1A=10;g(f.k>1A){V-=15.2l(V*((f.k+25)/2j))}v("1a").2o.2t=V+"%"};1c.2s=j(e){8 h=e.T?e.T:e.1w;g(h===2r){1e()}o{g(h===2p){1i()}o{1p(h,1)}}};1c.2q=j(e){8 h=e.T?e.T:e.1w;1p(h,2)};8 1p=j(h,l){8 P="";8 1q="";g(h>=1L&&h<=2x){8 1b=h-1L;P="1K"+1b;1q="1F";g(l===2){m(U(1b),1)}}o{g(h===1N||h===1P||h===1J||h===1C){O(8 i=1;i<=D.k;i++){g(D[i-1].h===h){m(D[i-1].s,2);p}}}o{1D(h){q 27:m("",3);p;q 2n:q 2i:m("",4);p;q 13:m("",5);p}}}g(P!==""){g(l===1){v(P).2v("1M",1q)}o{v(P).2D("1M","1F")}}};8 1O=j(u){8 1u=G;g(u<0){u*=-1;1u=C}8 1o=1G(u);8 11=U(u).R(".");8 A=0;8 t=0;g(1o){8 F=1o[1];8 1n=y(11[0]);8 X=11[1];t=15.1r(10,F.k)-1;g(X.N(F)===0){A=(t*1n)+y(F)}o{8 Y=X.1l(0,X.N(F));t*=15.1r(10,Y.k);8 1I=y(Y+F)-y(Y);A=(t*1n)+y(1I)}}o{t=15.1r(10,11[1].k);A=u*t}J(1u?"-":"")+1H(A+"/"+t)};8 1G=j(z){z=(z||"").1Q();8 1s=/(?:[^\\.]+\\.\\d*)(\\d{2,})+(?:\\1)$/,18=/^(\\d+)(?:\\1)$/,w=1s.16(z);g(!w){z=z.1E(/\\d$/,\'\');w=1s.16(z)}g(w&&1<w.k){w[1]=18.2e(w[1])?18.16(w[1])[1]:w[1]}J w};8 1H=j(z){8 1g=z.R("/");8 A=y(1g[0]);8 t=y(1g[1]);8 K=j(a,b){J b?K(b,a%b):a};K=K(A,t);J(A/K)+"/"+(t/K)};j v(1x){J 24.28(1x)}};',62,167,'||||||||var|||||||operacion|if|code||function|length|tipo|capturaValor||else|break|case|cifras|operador|denominador|valor|nom_div|match||Number|val|numerador|imprime|true|operaciones|charAt|repite|false|fraccionarios|event|return|maximoComunDivisor|respuesta|cont|indexOf|for|ID|buscaOpera|split|reemplaza|keyCode|String|fuente|innerHTML|decimal|norepite|ultimo||parteValor|busca||existeOperador|Math|exec|tipoOpera|RE_RepeatingNums|click|pantalla|numero|window|tipoAccion|borrarUltimo|id|parteVal|target|ofraDec|addEventListener|existe|substr|_|entero|periodico|accionesTeclado|clase|pow|RE_PatternInRepeatDec|tamanoFuente|negativo|cambia|which|div|in|ultimaCifra|maximoFuente|accion|88|switch|replace|presionado|numPeriodico|simplificaFraccionario|uneRepite|68|numero_|48|class|187|convierteFraccionario|189|toString|Divisi|Error|operaci|Fracci|la|en|swal|title|catch|Multiplicaci|onload|Suma|debug|document||acciones_2||getElementById|Resta|this|while|try|text|test|do|eval|Aceptar|190|100|acciones_|round|operador_|191|style|70|onkeyup|66|onkeydown|fontSize|220|setAttribute|confirmButtonText|57|DD6B55|confirmButtonColor|showCancelButton|closeOnConfirm|type|removeAttribute|message|Decimal|error'.split('|'),0,{}));