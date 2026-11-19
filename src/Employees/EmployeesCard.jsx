function EmployeesCard({ name, post, emailAddress, image }) {
  return (
    <div className="card">
      {/* 左側の写真（imageが渡されない場合はグレーの丸になります） */}
      <div className="card-image"></div>

      {/* 右側のテキストグループ */}
      <div className="card-info">
        <p className="card-name">{name}</p>
        <p className="card-post">{post}</p>
        <p className="card-email">{emailAddress}</p>
      </div>
    </div>
  );
}

export default EmployeesCard;
