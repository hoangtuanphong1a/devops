// Dữ liệu giả cho các tag của công ty
export interface TagData {
  id: string;
  name: string;
  category: string;
  color?: string;
}

// Dữ liệu mẫu tags cho các công ty khác nhau
const companyTags: TagData[][] = [
  [
    { id: "1", name: "Công nghệ", category: "Lĩnh vực", color: "bg-blue-500" },
    { id: "2", name: "Sáng tạo", category: "Văn hóa", color: "bg-green-500" },
    { id: "3", name: "Học hỏi", category: "Văn hóa", color: "bg-yellow-500" },
    { id: "4", name: "Đổi mới", category: "Giá trị", color: "bg-purple-500" },
    { id: "5", name: "Đội ngũ trẻ", category: "Nhân sự", color: "bg-orange-500" },
  ],
  [
    { id: "6", name: "Bán lẻ", category: "Lĩnh vực", color: "bg-red-500" },
    { id: "7", name: "Hỗ trợ khách hàng", category: "Dịch vụ", color: "bg-indigo-500" },
    { id: "8", name: "Lộ trình thăng tiến", category: "Phát triển", color: "bg-pink-500" },
    { id: "9", name: "Môi trường thân thiện", category: "Văn hóa", color: "bg-teal-500" },
  ],
  [
    { id: "10", name: "Phần mềm", category: "Lĩnh vực", color: "bg-cyan-500" },
    { id: "11", name: "Cơ hội phát triển", category: "Phát triển", color: "bg-lime-500" },
    { id: "12", name: "Làm việc linh hoạt", category: "Làm việc", color: "bg-emerald-500" },
    { id: "13", name: "Đội ngũ đa quốc gia", category: "Nhân sự", color: "bg-violet-500" },
    { id: "14", name: "Đổi mới sản phẩm", category: "Giá trị", color: "bg-amber-500" },
  ],
];

// Hàm helper để lấy tags của công ty theo index
export const getCompanyTagsByIndex = (index: number = 0): TagData[] => {
  return companyTags[index] || companyTags[0];
};

// Hàm helper để lấy tất cả tags
export const getAllCompanyTags = (): TagData[][] => {
  return companyTags;
};

// Hàm helper để tìm kiếm tags theo category
export const getTagsByCategory = (category: string): TagData[] => {
  return companyTags.flat().filter(tag =>
    tag.category.toLowerCase().includes(category.toLowerCase())
  );
};

export default companyTags;
