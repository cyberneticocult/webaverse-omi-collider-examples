import * as THREE from 'three'

import metaversefile from 'metaversefile'
const { useApp } = metaversefile

const baseUrl = import.meta.url.replace(/(\/)[^\/\\]*$/, '$1')

export default e => {
  
  const app = useApp()

  e.waitUntil((async () => {
    
    const modelUrl = `${baseUrl}collider_types.glb`
    const model = await metaversefile.import(modelUrl)
    
    app.addModule(model)
    
  })())
  
  return app
  
}
