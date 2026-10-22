# Chăm da cho vợ

Web app tiếng Việt, tối ưu cho iPhone. Không dùng framework, không cần build hay cài dependency. Danh sách sản phẩm và lịch 7 ngày được khởi tạo từ `Lich_Trinh_Skincare_Hoan_Hao_v3.xlsx`.

## Chạy thử

Mở `index.html` trực tiếp để xem giao diện. Để PWA và chạy offline hoạt động, mở thư mục bằng một web server tĩnh, ví dụ:

```sh
python3 -m http.server 8000
```

Sau đó mở `http://localhost:8000`.

## Deploy GitHub Pages

1. Tạo GitHub repository mới và đưa các file trong thư mục này lên nhánh `main`.
2. Mở **Settings → Pages** của repository và chọn **GitHub Actions** làm nguồn deploy.
3. Workflow `.github/workflows/pages.yml` tự đưa app lên Pages sau mỗi lần push vào `main`.

App dùng đường dẫn tương đối nên chạy được ở cả domain chính lẫn URL dạng `username.github.io/repository/`. Không cần secrets, build, backend hay database. Website GitHub Pages thường là công khai; dữ liệu sản phẩm người dùng thêm chỉ lưu trong trình duyệt của thiết bị và không được gửi lên GitHub.

## Cài lên iPhone

Mở URL GitHub Pages bằng Safari → **Chia sẻ** → **Thêm vào màn hình chính**. Sau khi mở app ít nhất một lần, phần vỏ giao diện có thể dùng offline. Dữ liệu `localStorage` gắn với trình duyệt và thiết bị đó; xóa dữ liệu Safari có thể làm mất danh sách đã nhập.

## Nhắc nhở trên iPhone

GitHub Pages không có máy chủ để gửi push notification khi app đóng. Trong tab **Cài đặt**, chọn giờ sáng/tối rồi chạm **Thêm nhắc nhở vào Lịch iPhone**. Mở file `nhac-skincare.ics` vừa tải về trên iPhone và thêm hai lịch lặp hằng tuần vào ứng dụng Lịch; Lịch sẽ hiện thông báo theo giờ đã chọn.

## Nội dung

- Quản lý sản phẩm: thêm, sửa, xóa, tìm kiếm và đánh dấu đang có/cần mua.
- Lịch tuần: xem lịch sáng/tối, sửa các bước và trọng tâm theo từng ngày.
- Hôm nay: checklist từng bước, trạng thái hoàn thành lưu theo ngày.
- Lưu tại chỗ bằng `localStorage`; không tài khoản, không server, không gửi dữ liệu đi.

Ảnh sản phẩm là ảnh tham khảo nhúng từ trang thương hiệu/nhà bán lẻ và có liên kết nguồn ngay trong tủ. Ảnh cần mạng để tải; nếu nguồn thay đổi, ngăn sản phẩm sẽ hiện hình minh họa thay thế. Một số ảnh nhận diện theo tên rút gọn trong lịch (như B9, Retinal Shot), nên có thể khác phiên bản bao bì thực tế.
