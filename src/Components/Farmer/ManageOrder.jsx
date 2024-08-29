import React from 'react';

const ManageOrder = () => {
  const OrdersDetails = [
    {
      ID: "1233",
      product: "Wheat",
      quantity: "100 quintal",
      DateOfDelivery: "10/12/2024",
      priceOffered: "₹2000 per quintal",
      companyName: "ABC Foods Ltd.",
      qualitySpecifications: "Grade A, Moisture content below 12%",
      applicationDeadline: "05/12/2024",
      paymentTerms: "50% advance, 50% upon delivery",
      additionalNotes: "Ensure packaging in 50kg sacks.",
    }
  
  ];

  const handleAddOrderDetails=()=>{

  }
  return (
    <>
      <div className="container tw-mt-20 border">
        Recent Orders
        <ul class="list-group">
          <p class="tw-text-lg tw-mt-2">
            {OrdersDetails.map((order) => (
              <li class="list-group-item">
                {order.quantity + " " + order.product}{" "}
                <button type="button" class="btn btn-primary tw-float-right">
                  Apply
                </button>
              </li>
            ))}
          </p>
        </ul>
      </div>
    </>
  );
}

export default ManageOrder;
