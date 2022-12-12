<script setup lang="ts">
import { Vector3 } from 'three'
import { onMounted, ref, reactive } from 'vue'
import Gradienter from './Gradienter'
import SocketService from './SocketService';

const root = ref<HTMLDivElement>()

let api = '/subscribe'

let flag = false

let protocol = 'ws://'

let id = ''
let url = ''

let world: Gradienter

const init = () => {
  if (flag) {
    return
  } else {
    flag = true
    initWorld()
  }
}

const parseQuery = () => {
  const str = location.search || location.hash || ''
  const [hash, query] = str.split('?')
  const result: Map<string, string> = new Map()
  if (query) {
    const strs = query.split('&')
    for (let i = 0; i < strs.length; i++) {
      const [key, value] = strs[i].split('=')
      result.set(key, value)
    }
  }
  return result
}

const change_face = (x: number, y: number, z: number) => {
  world.change(new Vector3(x, z - 90, y))
}

const initWorld =() => {

  if (location.protocol.startsWith('https')) {
    protocol = 'wss:'
  }

  let _id = parseQuery().get('id')
  if (id == undefined) {
    return
  }
  id = _id!
  let host = location.host
  api = protocol + host + api
  url = api
  let ws = SocketService.Instance
  ws.url = url

  ws.onmessage = (msg) => {
    if (msg == undefined || msg.data == undefined) {
      return
    }
    console.log(msg)
    let d = JSON.parse(msg.data)
    console.log(d)
    change_face(d.x, d.y, d.z)
  }

  ws.connect()

  world = new Gradienter(root.value!)
  world.start()
}

onMounted(() => {
  init()
})


</script>

<template>
  <div class="w" ref="root"></div>
</template>

<style scoped>
.w{
width: 640px;
height: 640px;
}
</style>
