import { useState } from 'react'
import { FiCpu, FiHardDrive } from "react-icons/fi";
import { BsNvidia, BsDisplay } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";

import './App.css'

function App() {

  return (
    <>
      <div className='Portada'>
        <div>
          <h1 className='Titulo'>Potencia sin límites</h1>
          <p className='Descripcion'>
            Intel Core i7-13620H de 13ª generación combinado 
            con NVIDIA GeForce RTX 4060. Pantalla FHD de 165Hz 
            para una experiencia de juego fluida y competitiva.
          </p>
          <div style={{marginTop:"20px"}}>
            <a className='Intel'>I7-13620H</a>
            <a className='Nvidea'>RTX 4060</a>
          </div>
            
        </div>
        <img src="Laptop.jpg" alt="" />
        
      </div>

      <div class="Componentes">
        <div class="Componentes-contenido">
          <div>
            <h1>10</h1>
            <p>Núcleos CPU</p>
          </div>
          <div>
            <h1>16GB</h1>
            <p>RAM DDR5</p>
          </div>
          <div>
            <h1>8GB</h1>
            <p>VRAM GDDR6</p>
          </div>
          <div>
            <h1>1TB</h1>
            <p>SSD NVMe</p>
          </div>
          <div>
            <h1>165Hz</h1>
            <p>Refresh Rate</p>
          </div>
        </div>
      </div>
      
      <div className='Titulo_Principal'>
        <h1>Especificaciones Técnicas</h1>
        <p>Especificaciones tecnicas de cada componente de la laptop</p>
      </div>

      <div className='Tarjetas'>

        <div className='Tarjeta'>
          <div class="info">
            <a class="icon"><FiCpu /></a>
            <div class="text">
              <h1>Procesador</h1>
              <h2>Intel Core I7-13620H</h2>
            </div>
          </div>
          <p>Generación: <a>13ª Gen</a></p>
          <p>Núcleos: <a>10 (6P + 4E)</a></p>
          <p>Hilos: <a>16</a></p>
          <p>Frecuencia base: <a>2.4 GHz</a></p>
          <p>Turbo boost: <a>Hasta 4.9 GHz</a></p>
          <p>Caché: <a>24 MB</a></p> 
        </div>

        <div className='Tarjeta'>
          <div class="info">
            <a class="icon"><BsNvidia /></a>
            <div class="text">
              <h1>Tarjeta Grafica</h1>
              <h2>NVIDIA RTX 4060</h2>
            </div>
          </div>
          <p>Frecuencia: <a>1920MHz</a></p>
          <p>Memoria: <a>8GB GDDR6</a></p>
          <p>TGP: <a>140W</a></p>
          <div className='separator'/>
          <div className='Tecnologias'>
            <p>Tecnologías:</p>
            <a>DLSS 3</a>
            <a>Ray Tracing</a>
            <a>Reflex</a>
            <a>G-Sync</a>
          </div>

        </div>

        <div className='Tarjeta'>
          <div class="info">
            <a class="icon"><BsDisplay /></a>
            <div class="text">
              <h1>Pantalla</h1>
              <h2>16.1" FHD</h2>
            </div>
          </div>
          <p>Resolucion: <a>1920x1080</a></p>
          <p>Frecuencia: <a>165 Hz</a></p>
          <p>Brillo: <a>300 nits</a></p>
          <p>Tipo: <a>IPS</a></p>
          <p>Color: <a>100% sRGB</a></p>
          <p>Tecnología: <a>Adaptive-Sync</a></p>
        </div>

        <div className='Tarjeta'>
          <div class="info">
            <a class="icon"><FiHardDrive /></a>
            <div class="text">
              <h1>Memoria y Almacenamiento</h1>
              <h2>DDR5 y Nvme Gen 4</h2>
            </div>
          </div>
          <p style={{fontWeight:"600",color:"black"}}>RAM</p>
          <p>Capacidad: <a>16GB (2x8GB)</a></p>
          <p>Tipo: <a>DDR5 5200Mhz</a></p>
          <p>Ampliable: <a>Hasta 32GB</a></p>
          <div className='separator'></div>
          <p style={{fontWeight:"600",color:"black"}}>Almacenamiento</p>
          <p>Capacidad:<a>1TB SSD</a></p>
          <p>Tipo: <a>Nvme Gen4</a></p>
          <p>Ampliable:<a>2TB Nvme</a></p> 
        </div>

        <div className='Tarjeta'>
          <div class="info">
            <a class="icon"><FaWifi /></a>
            <div class="text">
              <h1>Conectividad</h1>
              <h2>Wi-Fi 6E + Bluetooth 5.3</h2>
            </div>
          </div>
          <p style={{fontWeight:"600",color:"black"}}>Inalambrico</p>
          <p>Wifi: <a>6E AX211 (2x2)</a></p>
          <p>Bluetooth: <a>5.3</a></p>
          <div className='separator'></div>
          <p style={{fontWeight:"600",color:"black"}}>Puertos</p>
          <p>USB-C 3.2:<a>1TB SSD</a></p>
          <p>USB-A 3.2: <a>3x</a></p>
          <p>HDMI:<a>1x HDMI 2.1</a></p> 
          <p>Ethernet:<a>RJ-45 Gigabit</a></p> 
          <p>Audio:<a>Jack 3.5mm</a></p> 
        </div>

        <div className='Tarjeta'>
          <div class="info">
            <a class="icon"><CiBatteryFull /></a>
            <div class="text">
              <h1>Batería y refrigeración</h1>
              <h2>83 Wh + Dual Fan</h2>
            </div>
          </div>
          <p style={{fontWeight:"600",color:"black"}}>Bateria</p>
          <p>Capacidad: <a>6 celdas, 83 Wh</a></p>
          <p>Cargador: <a>230W</a></p>
          <p>Carga rápida: <a>50% en 30 min</a></p>
          <p>Autonomía: <a>4-6 horas</a></p>
          <div className='separator'></div>
          <p style={{fontWeight:"600",color:"black"}}>Refrigeración</p>
          <p>Sistema:<a>Dual fan + 4 pipes</a></p>
          <p>Modos:<a>Performance/Eco</a></p> 
        </div>


      </div>

      <div className='Benchmarks'>
        <div className='Titulo_Principal'>
        <h1>Benchmarks</h1>
        <p>Especificaciones tecnicas de cada componente de la laptop</p>
      </div>
        <div className='BenchCards'>
          <div className='BenchCard'>Bench</div>
          <div className='BenchCard'>Bench</div>
          <div className='BenchCard'>Bench</div>
          <div className='BenchCard'>Bench</div>
          <div className='BenchCard'>Bench</div>
          <div className='BenchCard'>Bench</div>
        </div>
      </div>
    </>
  )
}

export default App