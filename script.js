document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("obfuscateBtn"),t=document.getElementById("resetBtn"),n=document.getElementById("luaInput"),l=document.getElementById("luaOutput");function r(){let e="abcdefghijklmnopqrstuvwxyz";return e.charAt(Math.floor(Math.random()*e.length))}function a(e){let t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="_";for(let l=0;l<e;l++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function o(e){let t=e,n={print:"NX[0x1]",warn:"NX[0x2]","task.wait":"NX[0x3]","Instance.new":"NX[0x4]","game:GetService":"NX[0x5]","CFrame.new":"NX[0x6]"};for(let l in n){let r=RegExp(l,"g");t=t.replace(r,n[l])}return t}function c(e){if(!e.trim())return"";let t=Math.floor(100*Math.random())+30,n="";for(let l=0;l<e.length;l++)n+=e.charCodeAt(l)+t+r(),l<e.length-1&&(n+=",");let o=a(8),c=a(9),d=a(6),i=a(9),u=a(6),f=a(6),g=a(7),m=`-- NexusOfuscador
`;return m+=`local ${o} = {loadstring, string.char, string.gmatch, string.match, tonumber}
`,m+=`local ${c} = "${n}"
`,m+=`local ${d} = ${t}
`,m+=`local ${i} = ""
`,m+=`for ${u} in ${o}[3](${c}, "([^,]+)") do
`,m+=`    local ${f} = ${o}[5](${o}[4](${u}, "%d+"))
`,m+=`    if ${f} then ${i} = ${i} .. ${o}[2](${f} - ${d}) end
`,m+=`end
`,m+=`local ${g} = ${o}[1](${i})
`,m+=`if ${g} then ${g}() end`}e.addEventListener("click",()=>{l.value=c(n.value)}),t.addEventListener("click",()=>{n.value="",l.value=""})});
