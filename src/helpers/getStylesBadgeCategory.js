export const getStylesBadgeCategory = (categoryName) => {

    let bgColor;
    let textColor;

    switch (categoryName) {
        case "Computer & Laptop":
            bgColor = "bg-[#1F2537]";
            textColor = "text-white";
            break;
        case "Mobile & Phone":
            bgColor = "bg-[#AFE638]";
            textColor = "text-black";
            break;
        case "Camera":
            bgColor = "bg-[#5E1EE5]";
            textColor = "text-white";
            break;
        case "TV & Smart Box":
            bgColor = "bg-[#F1F1F2]";
            textColor = "text-black";
            break;
        case "Home Appliance":
            bgColor = "bg-[#FFE921]";
            textColor = "text-black";
            break;
    }

    return {
        bgColor,
        textColor
    }
}