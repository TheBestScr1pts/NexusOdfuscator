document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("obfuscateBtn"),n=document.getElementById("resetBtn"),t=document.getElementById("luaInput"),l=document.getElementById("luaOutput");function r(){let e="abcdefghijklmnopqrstuvwxyz";return e.charAt(Math.floor(Math.random()*e.length))}function a(e){let n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",t="_";for(let l=0;l<e;l++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function o(e){let n=e,t={print:"NX[0x1]",warn:"NX[0x2]","task.wait":"NX[0x3]","Instance.new":"NX[0x4]","game:GetService":"NX[0x5]","CFrame.new":"NX[0x6]"};for(let l in t){let r=RegExp(l,"g");n=n.replace(r,t[l])}return n}function c(e){if(!e.trim())return"";let n=Math.floor(100*Math.random())+30,t="";for(let l=0;l<e.length;l++){let o=(e.charCodeAt(l)+n).toString(),c=r(),i=Math.floor(Math.random()*(o.length+1));t+="/"+(o.slice(0,i)+c+o.slice(i)),l<e.length-1&&(t+=",")}let d=a(8),u=a(9),f=a(6),g=a(9),m=a(6),s=a(7),h=`-- NexusOdfucator
`;return h+=`local ${d} = {loadstring, string.char, string.gmatch, string.match, tonumber}
`,h+=`local ${u} = "${t}"
`,h+=`local ${f} = ${n}
`,h+=`local ${g} = ""
`,h+=`for ${m} in ${d}[3](${u}, "[^,]+") do
`,h+=`    local n = ${d}[4](${m}, "%d+")
`,h+=`    if n then ${g} = ${g} .. ${d}[2]((tonumber(n) - ${f}) % 256) end
`,h+=`end
`,h+=`local ${s} = ${d}[1](${g})
`,h+=`if ${s} then ${s}() end`}e.addEventListener("click",()=>{l.value=c(t.value)}),n.addEventListener("click",()=>{t.value="",l.value=""})});
