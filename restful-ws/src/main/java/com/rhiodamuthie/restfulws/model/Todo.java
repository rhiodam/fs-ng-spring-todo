package com.rhiodamuthie.restfulws.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by W on 3/24/2019.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "TODO")
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String username;

    private String description;

    @Column(name = "targetDate")
    private Date targetDate = new Date();

    private boolean isDone;

}
