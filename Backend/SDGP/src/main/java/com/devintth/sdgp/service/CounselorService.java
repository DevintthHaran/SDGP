package com.devintth.sdgp.service;

import com.devintth.sdgp.model.Counselor;
import com.devintth.sdgp.repository.CounselorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CounselorService {

    @Autowired
    private CounselorRepository counselorRepository;

    public List<Counselor> getAllCounselors() {
        return counselorRepository.findAll();
    }

    public Counselor updateCounselorStatus(String id, Counselor counselor) {
        Optional<Counselor> existingCounselor = counselorRepository.findById(id);
        if (existingCounselor.isPresent()) {
            Counselor updatedCounselor = existingCounselor.get();
            updatedCounselor.setStatus(counselor.getStatus());
            updatedCounselor.setCounselorId(counselor.getCounselorId());
            return counselorRepository.save(updatedCounselor);
        }
        return null;
    }

    public void deleteCounselor(String id) {
        counselorRepository.deleteById(id);
    }
}
