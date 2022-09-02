package com.project.blografya.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.blografya.entities.RefreshToken;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long>{

	RefreshToken findByUserId(Long userId);
	
}
