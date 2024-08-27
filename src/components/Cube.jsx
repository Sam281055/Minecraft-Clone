import { useBox } from "@react-three/cannon"
import * as textures from '../images/textures.js'
import { useState } from "react"
import { useStore } from "../hooks/useStore.js"
export const Cube = ({id, position, texture})=>{
    const [isHovered, setIsHovered] = useState(false)
    const [ref] = useBox(()=>({
        type: 'Static',
        position
    }))
    
    const activeTexture = textures[texture + 'Texture']
    const [removeCube] = useStore(state => [state.removeCube])

    return (
        <mesh 
        onPointerMove={(e)=>{
            e.stopPropagation()
            setIsHovered(true)
        }}
        onPointerOut={(e)=>{
            e.stopPropagation()
            setIsHovered(false)
        }}
        onClick={(e)=>{
            if(e.altKey){
                removeCube(id)
            }
        }}
        ref={ref}>
            <boxGeometry attach='geometry'/>
            <meshStandardMaterial 
            attach='material' 
            color={isHovered ? 'grey' : 'white'}
            map={activeTexture}
            transparent/>
        </mesh>
    )
    
}