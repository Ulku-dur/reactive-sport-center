import "./Purchase.css"

function Purchase() {
  return (
    <div className="purchase">
        <div className="purchase-start">
          <h2>PURCHASE FROM US</h2>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dignissimos in quas animi eius hic, libero dolores vel facere expedita corrupti tempore tempora.</p>
        </div>
        <div className="purchase-cards">
          <div className="card">
            <img src="/images/purchase1.jpg" alt="" />
            <div className="card-text" >
              <h4>Kettlebell / 5kg</h4>
              <p><strike>89,99$</strike> / 59,99$</p>
              <div className="add">
                <i className="fa-solid fa-cart-shopping"></i>
                <p><b>Add to basket</b></p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="/images/purchase2.jpg" alt="" />
            <div className="card-text">
              <h4>Treadmill</h4>
              <p><strike>899,99$</strike> / 599,99$</p>
              <div className="add">
                <i className="fa-solid fa-cart-shopping"></i>
                <p><b>Add to basket</b></p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="/images/purchase3.jpg" alt="" />
            <div className="card-text">
              <h4>Adjustable Dumbbell</h4>
              <p><strike>89,99$</strike> / 59,99$</p>
              <div className="add">
                <i className="fa-solid fa-cart-shopping"></i>
                <p><b>Add to basket</b></p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="/images/purchase4.jpg" alt="" />
            <div className="card-text">
              <h4>Kettlebell / 3kg</h4>
              <p><strike>69,99$</strike> / 49,99$</p>
              <div className="add">
                <i className="fa-solid fa-cart-shopping"></i>
                <p><b>Add to basket</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Purchase