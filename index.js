import{a as v,S as B,i}from"./assets/vendor-CIF6YjI2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const R="56307611-360a1446100dd540147f1ee50",M="https://pixabay.com/api/",$=15;async function f(r,t){return(await v.get(M,{params:{key:R,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:$}})).data}const p=document.querySelector(".gallery"),y=document.querySelector(".loader"),L=document.querySelector(".load-more"),E=new B(".gallery a",{captionsData:"alt",captionDelay:250});function w(r){const t=r.map(({webformatURL:l,largeImageURL:c,tags:e,likes:o,views:s,comments:P,downloads:q})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${c}">
              <img
                class="gallery-image"
                src="${l}"
                alt="${e}"
              />
            </a>

            <ul class="image-info">
              <li>
                <h3>Likes</h3>
                <p>${o}</p>
              </li>
              <li>
                <h3>Views</h3>
                <p>${s}</p>
              </li>
              <li>
                <h3>Comments</h3>
                <p>${P}</p>
              </li>
              <li>
                <h3>Downloads</h3>
                <p>${q}</p>
              </li>
            </ul>
          </li>
        `).join("");p.insertAdjacentHTML("beforeend",t),E.refresh()}function m(){p.innerHTML=""}function S(){y.classList.remove("is-hidden")}function b(){y.classList.add("is-hidden")}function g(){L.classList.remove("is-hidden")}function n(){L.classList.add("is-hidden")}const O=document.querySelector(".form"),x=document.querySelector(".load-more");let u="",h=1,a=0,d=0;O.addEventListener("submit",A);x.addEventListener("click",H);async function A(r){if(r.preventDefault(),u=r.currentTarget.elements["search-text"].value.trim(),u===""){m(),n(),i.warning({message:"Please enter a search query!",position:"topRight"});return}h=1,a=0,d=0,m(),n(),S();try{const t=await f(u,h);if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}w(t.hits),a+=t.hits.length,d=t.totalHits,a>=d?(n(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):g()}catch{i.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{b()}}async function H(){h+=1,n(),S();try{const r=await f(u,h);w(r.hits),a+=r.hits.length,_(),a>=d?(n(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):g()}catch{i.error({message:"Something went wrong. Please try again later!",position:"topRight"}),g()}finally{b()}}function _(){const r=document.querySelector(".gallery-item");if(!r)return;const t=r.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
