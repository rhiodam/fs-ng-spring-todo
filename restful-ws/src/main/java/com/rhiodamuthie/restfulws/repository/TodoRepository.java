package com.rhiodamuthie.restfulws.repository;

import com.rhiodamuthie.restfulws.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by W on 3/24/2019.
 */

@Repository
public interface TodoRepository extends JpaRepository<Todo , Long>{
}
