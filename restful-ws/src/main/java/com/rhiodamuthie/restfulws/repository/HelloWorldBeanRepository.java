package com.rhiodamuthie.restfulws.repository;


import com.rhiodamuthie.restfulws.model.HelloWorldBean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HelloWorldBeanRepository extends JpaRepository<HelloWorldBean , Long> {
}
