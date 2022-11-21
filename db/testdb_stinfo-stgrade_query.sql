use testdb;

select NAME, DEPT from st_info;

select NAME, DEPT from st_info where ST_ID=202201;

select NAME, DEPT from st_info where DEPT='Game';

<<<<<<< HEAD
select Linux from st_grade where ST_ID=202201;
=======
select Linbux from st_grade where ST_ID=202201;
>>>>>>> e0096d113df2eeb29a9e1019698c735ffb1c7425

select st_info.NAME, st_info.DEPT, st_grade.Linux, st_grade.DB
from st_info, st_grade
where st_info.ST_ID=202201 and st_grade.ST_ID=202201;

update st_grade set DB=90 where ST_ID=202201;

select st_info.NAME, st_info.DEPT, st_grade.Linux, st_grade.DB
from st_info, st_grade
where st_info.ST_ID=202201 and st_grade.ST_ID=202201;

<<<<<<< HEAD
update st_grade set DEPT='Computer' where ST_ID=202201;

select st_info.NAME, st_info.DEPT, st_grade.Linux, st_grade.DB
from st_info, st_grade
where st_info.ST_ID=202201 and st_grade.ST_ID=202201;

=======
update st_info set DEPT='Computer' where ST_ID=202201;

select st_info.ST_ID, st_info.NAME, st_info.DEPT, st_grade.Linux, st-grade_DB
from st_info, st_grade
where st_info.ST_ID=202201 and st_grade.ST_ID=202201;
>>>>>>> e0096d113df2eeb29a9e1019698c735ffb1c7425
