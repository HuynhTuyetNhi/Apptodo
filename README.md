---TRẢ LỜI CÂU HỎI---
Câu 1: Kể tên những thư viện CSS và JS bạn đã dùng, kể cả trong project trên, chức năng và ưu điểm của các thư viện đó
Thư viện CSS:
+Boostrap 4: Là thư viện html,css,js sử dụng html,css, js tạo ra những mẫu cơ bản như form,button, table… giúp các nhà phát triển web dễ dàng tạo ra những giao diện web tương thích
Ưu điểm: Dễ dàng sử dụng, có khả năng tự động điều chính kích thước trang web phù hợp với các loại màn hình
Boostrap tương thích với tất cả các trình duyệt hiện đại như chrome, firefox,opera…
+Angular Material: là thư viện thành phần UI cho các nhà phát triền Angular JS, giúp xây dựng ứng dụng web hiện đại, hấp dẫn
Ưu điểm: Tạo ra trang web nhanh, đẹp mặt hơn
Dễ sử dụng hơn boostrap, giao diện thân thiện, đẹp mắt
+Animate.css: Là thư viện cung cấp một loạt các hình ảnh động, đẹp mắt, đa trình duyệt để tăng trải nghiệm người dụng.
Ưu điểm: Dễ dàng thay đổi CSS, điều chỉnh thời lượng, hướng, cách di chuyển của hình động một cách dễ dàng.
Hỗ trợ trên đa trình duyệt khác nhau
Đẹp mắt, sinh động, thu hút

Thư viện JS
Wow.js: Là sự kết hợp giữa Jquery và thư viện animation.css. Khi scroll website thì Jquery sẽ bắt sự kiện và kích hoạt chuyển động hay còn gọi là hành động và xuất hiện phần tử html  khi chúng ta lăn chuột.
Ưu điểm: Dễ sử dụng, tạo hiệu ứng đẹp mắt, nâng cao trải nghiệm người dùng
SweetAlert js: Là plugin jquey cung cấp cho người dùng popup thông báo rất đa dạng phong phú.
Ưu điểm: Có thể tùy chỉnh dễ dàng, giao diện rất đẹp, giúp trải nghiệm người dùng tốt hơn, web trở nên đẹp mặt và mang lại hiệu quả hơn.
Animation js: Là thư viện giúp làm cho hình ảnh được xuất hiện và chuyển động sống động trên màn hình.
Ưu điểm: Dễ dàng sử dụng, mang lại hiệu quả và giúp trang web đa dạng hơn.
Hightchart js là 1 thư viện js giúp ta vẽ các biểu đồ thống kê
Ưu điểm thuận lợi hiển thị biểu đồ dùng trong các trang admin
Câu 2: Trình bày về xử lý bất đồng bộ trong JS và bạn đã dùng chỗ nào trong project trên
Cơ chế xử lí bất đồng bộ trong JS
Javascript chia chương trình thành các đoạn code, có phần sẽ chạy ngay lập tức, có phần sẽ chạy vào 1 thời điểm sau đó.
Javascript sử dụng event loop để quản lí các event, bản chất là một queue , và sẽ thực hiện lần lược cho đến hết các event trong queue đó.
Việc đảm bảo các event hoạt động riêng rẽ độc lập sẽ giúp kết quả trả về không bị phụ thuộc vào thứ tự thực hiện của các event.
Hàm sẽ không được kích hoạt ngay khi gọi mà phải đợi trong queue.
Sử dụng bất đồng bộ trong project :
Trong Hàm addNote để có thể gọi hàm insertTask hoạt động thì phải hàm handleSubmit chạy để lấy dữ liệu thêm vào gửi qua hàm addNote,rồi mới truyền tham số vào trong hàm insertTask .
Câu 3: ReactJS, Jquery, Angular khác nhau như thế nào?
React JS là thư viện javascript dùng đề xây dựng giao diện người dùng theo kiến trúc component
Hỗ trợ xây dựng Single page application, nó chỉ là phần V trong mô hình MVC
Sử dụng javascript chuẩn ES6, nhưng không có kiểu dữ liệu.
Component biểu diễn giao diện UI gồm 2 loại Stateless và Stateful.
Đoạn mã được return trong component là dạng jsx, kết hợp giữa html và js.
Class =>ClassName
Các thẻ khuyết phải có dấu /
For => htmlFor
Trong react js không có khái niệm ngIf, ngClass,ngFor… như bên angular
Truyển dữ liệu từ cha sang con trong angular là input, còn trong react là thông qua props
Trong react js không có khái niệm output như trong angular để truyền dữ liệu từ con sang cha.
Chuyển trang trong react sử dụng (thẻ Link)
Angular js chủ yếu viết bằng code typescript gần giống như oop dễ tiếp cận hơn
Hướng tiếp cận dựa theo component, module theo mô hình MVC freamework
Angular sử dụng module để đóng gói một số chức năng cụ thể
Component biểu diễn UI là thẻ do người dùng định nghĩa chứa nội dung html.
Component trong angular gồm: Giao diện html, Css của html đó, selector, ngoài ra còn có 1 class javascript để xử lí cho component đó được export ra ngoài.
Trong angular có cơ chế binding dữ liệu Data-binding, còn có Structural và Attribute-directives đề thay đổi diện mạo thông qua *ngIf, *ngFor, *ngClass…
Chuyển trang trong react sử dụng (thẻ routerLink).
Jquery là bộ thư viện dựa trên ngôn ngữ javascript thuần
Chủ yếu là thư viện để thao tác với DOM.
jQuery là một thư viện JavaScript nhỏ, nhanh và giàu tính năng. Nó làm cho những thứ như duyệt tài liệu HTML và thao tác, xử lý sự kiện, hoạt ảnh và Ajax đơn giản hơn rất nhiều. jQuery đơn giản hóa rất nhiều thứ phức tạp từ JavaScript, như các cuộc gọi AJAX và thao tác DOM.
Câu 4: Trình bày về Floats và cách chúng hoạt động
Float là một kỹ thuật mà chúng ta thiết lập phần tử HTML trôi dạt về một hướng nào đó để lấp đầy các khoảng trống nếu có thể trong một khung chứa.
Cách hoạt động:
Khung chứa
Phần tử trôi dạt
Các phần tử bị trôi dạt kéo theo
Kích thước của phần tử trôi dạt.
Float: left là phần tử đó sẽ trôi về trái, và float: right là sẽ trôi về phía bên phải cho đến khi chạm vào viền khung chứa.
Câu 5: Trình bày về z-index và làm thế nào để nội dung stack với nhau được định hình.
z-index : mỗi element trong trang web hiển thị ngang và dọc theo 2 trục x,y, và hiển thị thứ tự chồng lấn theo trục z.
z-index để giải quyết cấp độ hiển thị các thẻ html lên trình duyệt, hay nói cách khác z-index giống như đánh số thứ tự hiển thị, thẻ nào có z-index càng cao thì nằm phía trên, z-index càng thấp thì nằm phía dưới.
Làm thế nào để nội dung stack với nhau định hình: mỗi thẻ đều có các thuộc tính và trong một tài liệu html sẽ có một thẻ cha, để nó phân cấp rõ ràng và các vị trí không bị đè lẫn lên nhau thì mỗi thẻ để có thể có node con.
Câu 6: Giải thích về CSS sprites và làm thế nào để bạn thực hiện chúng trên một trang web
Thuật ngữ “Sprites” thực ra là kỹ thuật đưa tất cả các hình ảnh trang trí như các icon hay button đặt vào một file hình duy nhất. Sau đó dùng thuộc tính background-position của CSS để hiện ra đúng vị trí cần thiết. Cách này cũng thường được áp dụng với các hiệu ứng hover, active hay focus để tạo các nút bấm động một cách mượt mà hơn hoặc để chứa các icon trang trí.
Làm thế nào để thực hiện chúng trên một trang web.
Đầu tiên chính là tính chính xác đến từng pixel của hình ảnh.
Tiếp theo nắm rõ thuộc tính background-position của CSS.
Để thêm phần tử vào trang: Thẻ img có hình ảnh giữ chỗ có thể tham chiếu sprite CSS theo ID, khi trang được tải, hình ảnh giữ chỗ sẽ được thay thề bằng sprite
 
