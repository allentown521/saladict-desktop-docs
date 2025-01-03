---
title: Saladict
titleTemplate: Download
layout: page
---

<script setup>
import { ref,computed } from 'vue'

const version = '3.0.5'

const download = (arch,ext)=>{
    if(ext === 'exe'){
        open(`https://github.com/allentown521/saladict/releases/download/${version}/Saladict_${version}_${arch}-setup.exe`)
    }else if(ext === 'dmg'){
        open(`https://github.com/allentown521/saladict/releases/download/${version}/Saladict_${version}_${arch}.dmg`)
    }else{
        open(`https://github.com/allentown521/saladict/releases/download/${version}/Saladict_${version}_${arch}.${ext}`)
    }
}
</script>

<h1 :class="$style.version">{{version}}</h1>

<div :class="$style.wrap">
    <div :class="$style.download">
        <div :class="$style.platform">
            <div :class="$style.platformHeader">
                <img src="/logo/windows.svg" :class="$style.platformIcon" alt="Windows" />
                <h2 :class="$style.platformTitle">Windows</h2>
            </div>
            <button :class="$style.button" @click="download('x64','exe')">
                Windows x64
                <Badge type="warning" text=".exe" />
            </button>
            <button :class="$style.button" @click="download('x86','exe')">
                Windows x86
                <Badge type="warning" text=".exe" />
            </button>
            <button :class="$style.button" @click="download('arm64','exe')">
                Windows arm64
                <Badge type="warning" text=".exe" />
            </button>
        </div>
        <div :class="$style.platform">
            <div :class="$style.platformHeader">
                <img src="/logo/apple.svg" :class="$style.platformIcon" alt="MacOS" />
                <h2 :class="$style.platformTitle">MacOS</h2>
            </div>
            <button :class="$style.button" @click="download('x64','dmg')">
                MacOS x64
                <Badge type="warning" text=".dmg" />
            </button>
            <button :class="$style.button" @click="download('aarch64','dmg')">
                MacOS aarch64
                <Badge type="warning" text=".dmg" />
            </button>
        </div>
        <div :class="$style.platform">
            <div :class="$style.platformHeader">
                <img src="/logo/linux.svg" :class="$style.platformIcon" alt="Linux" />
                <h2 :class="$style.platformTitle">Linux</h2>
            </div>
            <button :class="$style.button" @click="download('amd64','deb')">
                Linux x64
                <Badge type="warning" text=".deb" />
            </button>
            <button :class="$style.button" @click="download('i386','deb')">
                Linux x86
                <Badge type="warning" text=".deb" />
            </button>
            <button :class="$style.button" @click="download('arm64','deb')">
                Linux aarch64
                <Badge type="warning" text=".deb" />
            </button>
            <button :class="$style.button" @click="download('armhf','deb')">
                Linux armv7
                <Badge type="warning" text=".deb" />
            </button>
            <button :class="$style.button" @click="download('amd64','AppImage')">
                Linux x64
                <Badge type="warning" text=".AppImage" />
            </button>
        </div>
    </div>
</div>

<div :class="$style.warn">
    
:::warning Not sure which one to download?
Please see [Install Guide](/en/docs/install)
:::

</div>

<style module>
.warn {
    width: 80%;
    margin: 0 auto;
    text-align: center;
}

.version {
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    margin: 50px 0;
    color: #ffc131;
}

.wrap {
    display: flex;
    width: 100%;
    justify-content: center;
}

.download {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 20px;
    width: 80%;
}

.platform {
    display: flex;
    flex-direction: column;
    background-color: var(--vp-c-bg-soft);
    border: 2px solid var(--vp-c-divider);
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 20px;
    position: relative;
    padding-top: 84px;
}

.platformHeader {
    position: absolute;
    top: 24px;
    left: 24px;
    right: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding-bottom: 16px;
    border-bottom: 2px solid var(--vp-c-divider);
    height: 48px;
}

.platformIcon {
    width: 48px;
    height: 48px;
}

.platformTitle {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: var(--vp-c-text-1);
    line-height: 48px;
}

.button {
    min-width: 250px;
    width: 100%;
    height: 50px;
    padding: 10px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 20px;
    background-color: #288ae2;
    border-radius: 6px;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s ease;
}

.button:hover {
    background-color: #2076c3;
    transform: translateY(-1px);
}
</style>
