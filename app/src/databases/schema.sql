drop table users;
create table users(
	id varchar(30) not null,
    name varchar(30) not null,
    psword varchar(30) not null,
    in_date datetime default current_timestamp,
    primary key (id)
);


show tables;
desc users;

select * from users;

insert into users(id, name, psword) 
	values("test1" , "홍길동", "1111"),
     ("test2" , "이순신", "1111"),
     ("test3" , "강감찬", "1111"),
     ("test4" , "김민종", "1111"),
     ("test5" , "최수정", "1111");
     

