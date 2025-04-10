import { Category } from "../types";
import * as bavi from "../assets/bavi/bavi";
import * as coto from "../assets/coto/coto";
import * as hanoi from "../assets/hanoi/hanoi";
import * as ninhbinh from "../assets/ninhbinh/ninhbinh";
import * as caugiay from "../assets/caugiay/caugiay";
import * as totnghiep  from "../assets/totnghiep/totnghiep";
import * as sinhnhat  from "../assets/sinhnhat/sinhnhat";

export const categories: Category[] = [
  {
    id: "ba-vi",
    name: "Ba Vì 2019 (Chuyến đi đầu tiên)",
    media: [
      { id: 1, type: "image", src: bavi.bavi1, alt: "Gái nhà ai mà xinh thế" },
      {
        id: 2,
        type: "image",
        src: bavi.bavi2,
        alt: "Ong thấy hoa đẹp thì đến, nhưng hoa sợ ong",
      },
      {
        id: 3,
        type: "image",
        src: bavi.bavi5,
        alt: "Tấm đầu tiên chụp cùng nhau nè",
      },
      {
        id: 4,
        type: "image",
        src: bavi.bavi6,
        alt: "Người bình thường selfie trước gương, mình selfie trước tivi",
      },
      {
        id: 5,
        type: "image",
        src: bavi.bavi7,
        alt: `"Trả vờ mình cầm tay xong rồi anh chụp ảnh đưa nhau đi trốn đi anh"`,
      },
    ],
  },
  {
    id: "co-to",
    name: "Đi Cô Tô (Chuyến đi lên lịch trước 15')",
    media: [
      { id: 1, type: "image", src: coto.coto1, alt: "Đi bỉn đi bỉn" },
      {
        id: 2,
        type: "image",
        src: coto.coto2,
        alt: "Gió to ghê taaa",
      },
      {
        id: 3,
        type: "image",
        src: coto.coto3,
        alt: "Người đẹp và hoàng hôn =))",
      },
      {
        id: 4,
        type: "image",
        src: coto.coto4,
        alt: "Chính ra ưng nhất tấm nè, quá đẹp <3",
      },
      {
        id: 5,
        type: "image",
        src: coto.coto5,
        alt: `Người đàn bà làng chài`,
      },
      {
        id: 6,
        type: "image",
        src: coto.coto6,
        alt: "Cái này chụp trộm keke",
      },
      {
        id: 7,
        type: "image",
        src: coto.coto7,
        alt: "Cái này chụp trộm keke",
      },
      {
        id: 8,
        type: "image",
        src: coto.coto8,
        alt: "Cái này chụp trộm keke",
      },
    ],
  },
  {
    id: "ha-noi",
    name: "Hà Nội - Tuổi thanh xuân của chúng mình",
    media: [
      {
        id: 1,
        type: "image",
        src: hanoi.hanoi1,
        alt: "Gái nhà ai mà xinh thế",
      },
      {
        id: 2,
        type: "image",
        src: hanoi.hanoi2,
        alt: "Chinh gái thế nhò",
      },
      {
        id: 3,
        type: "video",
        src: hanoi.hanoi3,
        alt: "Xa là sẽ nhớ ngay :v", // Bạn có thể thay đổi mô tả này
      },
      {
        id: 4,
        type: "video",
        src: hanoi.hanoi4,
        alt: "Haiiii", // Bạn có thể thay đổi mô tả này
      },
      {
        id: 5,
        type: "image",
        src: hanoi.hanoi5,
        alt: "Gơ hay dỗi tìm boy hay dỗ",
      },
      {
        id: 6,
        type: "image",
        src: hanoi.hanoi6,
        alt: "Concept đồ đôi áo con gấu",
      },
      {
        id: 7,
        type: "image",
        src: hanoi.hanoi7,
        alt: "Đi chơi đêm chụp bóng chúng mình nè",
      },
      {
        id: 8,
        type: "image",
        src: hanoi.hanoi8,
        alt: "Ả sờ lây =))",
      },
      {
        id: 9,
        type: "image",
        src: hanoi.hanoi9,
        alt: "Chúng mình ở nhà iem nè <3",
      },
      {
        id: 10,
        type: "image",
        src: hanoi.hanoi10,
        alt: "Ảnh này ở AEON Mall, bạn VKhanh chụp choaaa",
      },
      {
        id: 11,
        type: "video",
        src: hanoi.hanoi11,
        alt: "Nhìn cái má muốn cắn zler",
      },
      {
        id: 12,
        type: "video",
        src: hanoi.hanoi13,
        alt: "Cũng muốn cắn =))",
      },
      {
        id: 14,
        type: "image",
        src: hanoi.hanoi14,
        alt: "Chụp trộm được rấc nhiều ảnh xinh",
      },
      {
        id: 15,
        type: "image",
        src: hanoi.hanoi15,
        alt: "Quảnh Ninh mà mình chụp riêng có mỗi ảnh này thui nên cho zô đây lun",
      },
      {
        id: 16,
        type: "image",
        src: hanoi.hanoi16,
        alt: "Gơn quỷ đỏ, bắn bỏ đứa nào nói yêu anh",
      },
      {
        id: 17,
        type: "image",
        src: hanoi.hanoi17,
        alt: "Ngái ngụ cũng xinh gớm",
      },
      {
        id: 18,
        type: "image",
        src: hanoi.hanoi18,
        alt: "HNoi thì kh thể thiếu được ảnh ở quán vịt này ùi",
      },
      {
        id: 19,
        type: "image",
        src: hanoi.hanoi19,
        alt: "Đoán xem ai mua Goku cho ĐK nèooo",
      },
      {
        id: 20,
        type: "video",
        src: hanoi.hanoi20,
        alt: "Chạy bộ nèee, cười ná thở",
      },
    ],
  },
  {
    id: "ninh-binh",
    name: "Ninh Bình - Du lịch cùng với bạn của em",
    media: [
      {
        id: 1,
        type: "video",
        src: ninhbinh.ninhbinh1,
        alt: "Máy anh có mỗi video này ở Ninh Bình là có chúng mình",
      },
      {
        id: 2,
        type: "image",
        src: ninhbinh.ninhbinh2,
        alt: "Ảnh này cute điên =))",
      },
      {
        id: 3,
        type: "image",
        src: ninhbinh.ninhbinh3,
        alt: "Nhìn âu yếm thế mà sao lên ảnh giống lườm nhau z trời",
      },
      {
        id: 4,
        type: "image",
        src: ninhbinh.ninhbinh4,
        alt: "Hoá ra chuyện mình thật tìnhhh",
      },
    ],
  },
  {
    id: "sinh-nhat",
    name: "Khi cả 2 thêm 1 tuổi mới",
    media: [
      {
        id: 1,
        type: "image",
        src: sinhnhat.sinhnhat1,
        alt: "Sinh nhật đầu tiên của em có anh",
      },
      {
        id: 2,
        type: "image",
        src: sinhnhat.sinhnhat2,
        alt: "Sinh nhật thứ 2 của anh có em",
      },
      {
        id: 3,
        type: "image",
        src: sinhnhat.sinhnhat3,
        alt: "Sinh nhật năm thứ 3 nè, rất tuyệt vời đó",
      },
      {
        id: 4,
        type: "image",
        src: sinhnhat.sinhnhat4,
        alt: "Sinh nhật em được đi ăn lẩuuu",
      },
      {
        id: 5,
        type: "image",
        src: sinhnhat.sinhnhat5,
        alt: "Bánh sinh nhật đẳng cấp nhất mà anh có haha",
      }, {
        id: 6,
        type: "video",
        src: sinhnhat.sinhnhat6,
        alt: "Sinh nhật em bé của anh ở phòng anh lun nè",
      }, {
        id: 7,
        type: "image",
        src: sinhnhat.sinhnhat7,
        alt: "Hôm sau được mời đi ăn bíp tếch =))",
      }, {
        id: 8,
        type: "video",
        src: sinhnhat.sinhnhat8,
        alt: "Hong bíc em ước gì, chỉ ước là mình đừng bỏ lỡ nhau",
      }, {
        id: 9,
        type: "image",
        src: sinhnhat.sinhnhat9,
        alt: "Đi ăn ké sinh nhật cũng có ảnh mang về",
      },
    ],
  },
  {
    id: "tot-nghiep",
    name: "Bước vào thị trường lao động",
    media: [
      {
        id: 1,
        type: "image",
        src: totnghiep.totnghiep1,
        alt: "Xinhiucute tốt nghiệp nè",
      },
      {
        id: 2,
        type: "image",
        src: totnghiep.totnghiep2,
        alt: "Xinhiucute tốt nghiệp nè"
      },
      {
        id: 3,
        type: "image",
        src: totnghiep.totnghiep3,
        alt: "Tốt nghiệp nma nhìn chỗ khác =))",
      },
      {
        id: 4,
        type: "image",
        src: totnghiep.totnghiep4,
        alt: "Pic này a đẹp nhất trong số tất cả ảnh hôm đấy =))",
      }, {
        id: 5,
        type: "image",
        src: totnghiep.totnghiep5,
        alt: "Thiếu nữ mệt mỏi vì phải đợi lâu ...",
      }, {
        id: 6,
        type: "image",
        src: totnghiep.totnghiep6,
        alt: "Tốt nghiệp anh nè bé iu",
      }, {
        id: 7,
        type: "image",
        src: totnghiep.totnghiep7,
        alt: "Tốt nghiệp anh nè bé iu",
      }, {
        id: 8,
        type: "image",
        src: totnghiep.totnghiep8,
        alt: "Ưng tấm này nhất lun áaaa",
      },
    ],
  },
  {
    id: "cau-giay",
    name: "Ổ quỷ =)))",
    media: [
      {
        id: 1,
        type: "image",
        src: caugiay.caugiay1,
        alt: "Em bé đi nhổ răng khôn nè",
      },
      {
        id: 2,
        type: "image",
        src: caugiay.caugiay2,
        alt: "Cute 1",
      },
      {
        id: 3,
        type: "image",
        src: caugiay.caugiay3,
        alt: "Cute 2 =))",
      },
      {
        id: 4,
        type: "image",
        src: caugiay.caugiay4,
        alt: "Chụp trộm cũng vẫn cute",
      },
    ],
  },
];
