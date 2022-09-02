package com.project.blografya.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.blografya.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByUserName(String userName);

}
