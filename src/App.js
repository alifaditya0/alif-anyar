import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <div className="Foto">
        <img src="1_Untitled_8_5_6.jpg" />
      </div>
      <div className="Deskripsi">
        <p className="judul" id="judul">ASUS ROG Strix Scar 17 se</p>
        <p className="Title"><b>Available Now</b></p>
        <p className="Price">Number:<a id="nomer">#92758</a></p>
        <p className="Info">
          NVIDIA® GeForce RTX™ 3080 Ti Laptop GPU
          Windows 11 Home
          12th Gen Intel® Core™ i9-12950HX
          17.3 inch, WQHD (2560 x 1440) 16:9, Refresh Rate:240Hz
          2TB PCIe® 4.0 NVMe™ M.2 Performance SSD
        </p>
        <p><b>RAM</b></p>
        <tabel>
          <tr id="i">
            <th><button id="button">8</button></th>&nbsp;
            <th><button id="button">16</button></th>&nbsp;
            <th><button id="button">32</button></th>&nbsp;
            <th><button id="button">64</button></th>&nbsp;
          </tr>
        </tabel><br></br><br></br><br></br>
        <tabel>
          <tr >
            <th><button id="o"><p id="v">BUY NOW</p></button></th>&nbsp;&nbsp;&nbsp;
            <th><button id="u">ADD TO WISHLIST</button></th>
          </tr>
        </tabel>
        <p id="z">Stok Is Ready</p>
      </div>

      <div className="Parentbox1">
        <div className="Foto1">
          <img src="1_Untitled_8_5_6.jpg" />
        </div>
        <div className="Deskripsi1">
          <p className="judul" id="j">LAPTOP</p>
          <p className="Title" id="name">ASUS ROG</p>
          <p className="Info">
            NVIDIA® GeForce RTX™ 3080 Ti Laptop GPU
            Windows 11 Home
            12th Gen Intel® Core™ i9-12950HX
            17.3 inch, WQHD (2560 x 1440) 16:9, Refresh Rate:240Hz
            2TB PCIe® 4.0 NVMe™ M.2 Performance SSD
          </p>
          <hr></hr>
          <p>color</p>
          <tabel>
            <tr>
              &nbsp;&nbsp;<th><button id="w">✓</button></th>&nbsp;&nbsp;
              <th><button id="e">✓</button></th>&nbsp;&nbsp;
              <th><button id="q">✓</button></th>&nbsp;&nbsp;
            </tr>
          </tabel><br></br>
          <p>Cable Configuration</p>
          <tabel>
            <tr id="i">
              &nbsp;<th><button id="button3">Straight</button></th>&nbsp;&nbsp;
              <th><button id="button3">Coiled</button></th>&nbsp;&nbsp;
              <th><button id="button23">Long-Coiled</button></th>&nbsp;
            </tr>
          </tabel><br></br>

          <p id="j"><svg xmlns="http://www.w3.org/2000/svg" fill="none" id="svg" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>How to configurate your divice</p>
          <hr></hr>
          <th ><a id="n">Rp.65.999.000 </a><button id="b"><p id="v">Add to cart</p></button></th>
        </div>
      </div>
    </div>
  );
}

export default App;